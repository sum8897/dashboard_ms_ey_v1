import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { getBarDatasetConfig, getChartJSConfig } from 'src/app/core/config/ChartjsConfig';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';
import { buildQuery, parseFilterToQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { CriteriaService } from 'src/app/core/services/criteria.service';
import { filter, isNull, omitBy } from 'lodash';
import { BarchartBenchmarkService } from 'src/app/core/services/barchart-benchmark/barchart-benchmark.service';
import { DataService } from 'src/app/core/services/data.service';
import { EnrollmentInfoTabComponent } from '../../enrollment-info-tab.component';
import { config } from 'src/app/views/school-general/config/school_general_config';
@Component({
  selector: 'app-enrollment-by-education-barchart',
  templateUrl: './enrollment-by-education-barchart.component.html',
  styleUrls: ['./enrollment-by-education-barchart.component.scss']
})
export class EnrollmentByEducationBarchartComponent implements OnInit, OnDestroy {
  compareDateRange: any = 7;
  title: any;
  chartHeight: any;
  marginTop: any;
  config;
  data;
  fileName: string = "";
  reportName: string = 'enrollment_barchart';
  filters: any = [];
  levels: any;
  tableReportData: any;
  minDate: any;
  maxDate: any;
  filterIndex: any;
  currentHierarchyLevel: any = 1;
  rbacDetails: any;
  pageSize: any;
  backUpData: any = [];
  criteriaApplied: boolean = false;
  drillDownSubscription: any;
  benchmarkSubscription: any;
  benchmarkValues: any;
  drillDownLevel: any;
  drillDownDetails: any;
  filterValues:any;
  filterneed:any;
  metricFilter:any;
  selectedYear: any;
  selectedMonth: any;
  
  
  

  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;
  @Output() exportReportData = new EventEmitter<any>();

  constructor(
    private readonly _commonService: CommonService,
    private readonly _wrapperService: WrapperService,
    private _rbacService: RbacService,
    private readonly _reportDrilldownService: ReportDrilldownService,
    private readonly _criteriaService: CriteriaService,
    private readonly _benchmarkService: BarchartBenchmarkService,
    private readonly _dataService: DataService,
    private csv: EnrollmentInfoTabComponent
  ) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })

  }

  ngOnInit(): void {
    this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(data => {
      if (data && data.linkedReports?.includes(this.reportName) && data.hierarchyLevel) {
        this.drillDownLevel = data.hierarchyLevel
        this.drilldownData(data);
        this._criteriaService.emit('reset')
        this.criteriaApplied = false;
      }
    })
    // this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(async (data) => {
    //   if (data && data.linkedReports?.includes(this.reportName) && data.hierarchyLevel) {
    //     this.drillDownLevel = data.hierarchyLevel
    //     this._criteriaService.emit('reset')
    //     this.criteriaApplied = false;
    //     // this.drilldownData(data);
    //     let result: any = await this._reportDrilldownService.drilldown(data, this.rbacDetails, config[this.reportName], this.startDate, this.endDate, this.drillDownDetails,this.filterValues, this.metricFilter,this.filterneed)
    //     this.drillDownDetails = result?.drillDownDetails
    //     this.tableReportData = result?.reportData
    //     if (this.tableReportData?.data?.length > 0) {
    //       let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
    //       this.csv.schoolCsvDownload(reportsData, this.drillDownLevel)
    //     }
    //   }
    // })
    this._criteriaService.criteriaObject.subscribe((data) => {
      if (data && data?.linkedReports?.includes(this.reportName)) {
        // this.applyCriteria(data)
        if (!this.criteriaApplied) {
          this.backUpData = this.tableReportData?.values
        }
        this.criteriaApplied = true
        this.tableReportData = this._criteriaService.applyCriteria(data, this.backUpData, this.tableReportData)
      }
    })
    this.benchmarkSubscription = this._benchmarkService.benchmarkValues.subscribe((values: any) => {
      let { options: { barChart: { benchmarkConfig } } } = config[this.reportName];
      if (values && Object.keys(values).includes(benchmarkConfig?.linkedReport)) {
        this.benchmarkValues = values;
        // this.includeBenchmarkConfig()
      }
    })
    // this.getReportData();
  }

  async getReportData(values: any,startDate: any, endDate : any): Promise<void> {

    
    let { filterValues, timeSeriesValues, filterneed } = values ?? { filterValues: [], timeSeriesValues: [], filterneed:[] };
    if (filterValues === undefined) {
      filterValues = []
    }
    this.metricFilter = [...filterValues].filter((filter: any) => {
      return filter.filterType === 'metric'
    })
    this.filterValues = [...filterValues].filter((filter: any) => {
      return filter.filterType !== 'metric'
    })
    this.filterneed=filterneed;
    console.log('lo-wise filterneed',this.filterneed)
    // console.log("reportData:",this.drillDownDetails)
     if (this.drillDownDetails !== undefined) {
      let result: any = await this._reportDrilldownService.drilldown({ hierarchyLevel: this.drillDownLevel }, this.rbacDetails, config[this.reportName], startDate, endDate, this.drillDownDetails, this.filterValues,this.metricFilter,this.filterneed)
      this.drillDownDetails = result?.drillDownDetails
      this.tableReportData = result?.reportData
      
    }
    else {
      // console.log("hello click===================", this.drillDownDetails)
      this.drillDownLevel = undefined;
      let { filterValues, timeSeriesValues } = values ?? { filterValues: [], timeSeriesValues: [] };
      if (filterValues === undefined) {
        filterValues = []
      }
    
      // this.filterValues = filterValues
      this.startDate = startDate;
      this.endDate = endDate;
      let reportConfig = config

      let { timeSeriesQueries, queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
      let onLoadQuery;
      let currentLevel;

      if (this.rbacDetails?.role) {
        filters.every((filter: any) => {
          if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
            queries = { ...filter?.actions?.queries }
            Object.keys(queries).forEach((key) => {
              queries[key] = parseRbacFilter(queries[key], this.rbacDetails)
            });
            return false
          }
          return true
        })
      }

      Object.keys(queries).forEach(async (key: any) => {
        if (this.startDate === undefined && this.endDate === undefined) {
          let endDate = new Date();
          let days = endDate.getDate() - this.compareDateRange;
          let startDate = new Date();
          startDate.setDate(days)
          
          onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
          console.log('237',this.startDate,this.endDate)
        }
        else if (this.startDate !== undefined && this.endDate !== undefined) {
          onLoadQuery = parseTimeSeriesQuery(queries[key], this.startDate, this.endDate)
          console.log('241')
        }

        let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

        let metricFilter = [...filterValues].filter((filter: any) => {
          return filter.filterType === 'metric'
        })
       

        this.filterValues.forEach((filterParams: any) => {
          query = parseFilterToQuery(query, filterParams)
        });
        console.log(key,filterneed)
        console.log(query)
        if (query && key === 'table'&& filterneed) {
          this.tableReportData = await this._dataService.getTableReportData(query, options);
          if (this.tableReportData?.data?.length > 0) {
            let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
            this.exportReportData.emit(reportsData)
          }
        }
        else if (query && key === 'bigNumber') {
          this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.tableReportData);
        }
        else if (query && key === 'bigNumberComparison') {
          this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'differencePercentage', this.tableReportData);
        }
        else if (query && key === 'barChart' && filterneed) {
          console.log('ttttttttttttt',query, options, filters, defaultLevel)
          // this.getBarChartReportData(query, options, filters, defaultLevel);
          let { reportData, config } = await this._dataService.getBarChartReportData(query, options, filters, defaultLevel);
          // this._dataService.stackBar(reportData,config,"primary_school","Primary",'rgba(0, 0, 255, 0.5)',0.6);
          this._dataService.stackBar(reportData,config,"upper_primary","Upper Primary",'rgba(255, 0, 0, 0.5)',0.42);
          this._dataService.stackBar(reportData,config,"secondary_school","Secondary",'rgba(0, 255, 0, 0.5)',0.4);
          this._dataService.stackBar(reportData,config,"higher_secondary_school","Higher Secondary",'rgba(214,215,39, 0.6)',0.4);
          this.tableReportData = reportData
          this.config = config;
          console.log('tablereport',this.tableReportData,this.config)
          
          if (this.tableReportData?.values?.length > 0) {
            let reportsData = { reportData: this.tableReportData.values, reportType: 'dashletBar', reportName: this.title }
            this.exportReportData.emit(reportsData)
          }
        }
        
        else if (query && key === 'map' && filterneed) {
          this.tableReportData = await this._dataService.getMapReportData(query, options, metricFilter)
          
          if (this.tableReportData?.data?.length > 0) {
            let reportsData = { reportData: this.tableReportData.data, reportType: 'map', reportName: this.title }
            // console.log("report_dat:",reportsData,query)
            this.exportReportData.emit(reportsData)
          }
        }
        // else if (query && key=== 'map_without_filter' && !filterneed) {
        //   this.reportData = await await this._dataService.getMapReportData(query, options, metricFilter)
        //   if (this.reportData?.data?.length > 0) {
        //     let reportsData = { reportData: this.reportData.data, reportType: 'map_without_filter', reportName: this.title }
        //     this.exportReportData.emit(reportsData)
        //   }
        // }
        
      })
    }
    }
    

  

  getBarChartReportData(query, options, filters, defaultLevel): void {

    let { barChart: { yAxis, xAxis, isMultibar, metricLabelProp, metricValueProp, tooltipMetrics, benchmarkConfig } } = options;
    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let rows = res;
      // if(isMultibar){
      //   rows = multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
      // }

      this.tableReportData = {

        values: filter(rows, (row) => row.district_name !== null && row.district_name !== 'undefined' && !isNull(row.district_name) && row.district_name !== '')
      }
      console.log('tablereprtdata 261',this.tableReportData)
      this.config = this.getConfig()
      // this._dataService.extraLine(this.tableReportData,this.config,"perc_students");
      // this._dataService.stackBar(this.tableReportData,this.config,"primary_school","Primary",'rgba(0, 0, 255, 0.5)',0.6);
          this._dataService.stackBar(this.tableReportData,this.config,"upper_primary","Upper Primary",'rgba(255, 0, 0, 0.5)',0.38);
          this._dataService.stackBar(this.tableReportData,this.config,"secondary_school","Secondary",'rgba(0, 255, 0, 0.5)',0.4);
          this._dataService.stackBar(this.tableReportData,this.config,"higher_secondary_school","Higher Secondary",'rgba(214,215,39, 0.6)',0.4);
      console.log('configgg', this.config)
      let subscription = this._benchmarkService.benchmarkValues.subscribe((values) => {
        if (values && Object.keys(values).includes(benchmarkConfig?.linkedReport) && this.benchmarkValues?.index && values.index == this.benchmarkValues.index) {
          setTimeout(() => {
            subscription.unsubscribe()
          }, 100);
          this.config = this.getConfig()
        }
      })
      if (this.tableReportData?.values?.length > 0) {
        let reportsData = { reportData: this.tableReportData.values, reportType: 'dashletBar', reportName: this.fileName }
        // this.csv.csvDownload(reportsData)
      }
    });
  }

  getYaxisTitle(filters: any): string {
    let title: string;
    filters.forEach((filter: any) => {
      if (Number(filter.hierarchyLevel) === this.currentHierarchyLevel - 1) {
        title = filter?.actions?.level;
      }
    });
    return title;
  }

  includeBenchmarkConfig() {

  }

  getConfig() {
    let { filters, defaultLevel, options } = config[this.reportName];
    let { barChart: { yAxis, xAxis, isMultibar, metricLabelProp, metricValueProp, tooltipMetrics, benchmarkConfig } } = options;
    let annotations = []
    let colors = ['green', 'blue', 'orange', 'red']
    let objLevel = {
      1: "State average",
      2: "District average",
      3: "Block average",
      4: "Cluster average"
    }
    let reportValues = this.benchmarkValues?.[benchmarkConfig?.linkedReport]
    let currentLevel = this.drillDownLevel ? this.drillDownLevel : this.rbacDetails.role;
    if (reportValues) {
      annotations = Object.keys(reportValues).filter(level => level <= currentLevel).map((level: any, index) => {
        return {
          drawTime: 'afterDraw',
          id: 'benchmark-' + (index + 1),
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: reportValues[level],
          borderColor: colors[index],
          borderWidth: 2,
          label: {
            content: objLevel[level] + ' - ' + reportValues[level],
            xAdjust: (135 * level) - (350),
            enabled: true,
            backgroundColor: colors[index],
            color: 'white'
          }
        }
      })

    }


    let tooltipObject
    this.tableReportData.values.forEach((row) => {
      let tooltip = this._wrapperService.constructTooltip(tooltipMetrics, row, metricValueProp, 'barChart')

      tooltipObject = {
        ...tooltipObject,
        [row.level.trim()]: tooltip
        // [row.district_name.trim()]: tooltip
      }
    });


    // let benchmarkValues = 
    let barChartConfig = getChartJSConfig({
      labelExpr: xAxis.value,
      datasets: getBarDatasetConfig(
        [{
          dataExpr: metricValueProp, label: metricLabelProp
        }]),

      options: {
        animation: {
          onComplete: function () {
            let chartInstance = this.chart;
            let ctx = chartInstance.ctx;
            ctx.font = '#000';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                const data = dataset.data[index];
                // ctx.fillText(data, bar._model.x, bar._model.y - 5);
              });
            });
          }
        },
        height: '150',
        tooltips: {
          // callbacks: {
          //   label: (tooltipItem, data) => {
          //     return tooltipObject[tooltipItem.label.trim()]
          //   }
          // }
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: yAxis.title !== 'level' ? yAxis.title : this.getYaxisTitle(filters) ? this.getYaxisTitle(filters) : defaultLevel
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: xAxis.title
            },
            ticks: {
              fontSize: 12,
              callback: function (value, index, values) {
                let newValue = value?.split('_')?.map((word: any) => word[0]?.toUpperCase() + word?.substring(1))?.join(' ')
                if (screen.width <= 768) {
                  return newValue?.substr(0, 8) + '...';
                } else {
                  return newValue;
                }
              }
            }
          }]
        },
        annotation: {
          drawTime: 'afterDatasetsDraw',
          events: ['click'],
          dblClickSpeed: 350,
          annotations: annotations
        }

      }
    });
    return barChartConfig
  }

  async drilldownData(event: any) {
    let { hierarchyLevel, id } = event ?? {}
    let drillDownDetails;

    switch (Number(hierarchyLevel)) {
      case 1:
        drillDownDetails = {
          ...this.rbacDetails,
          state: id ? id : this.drillDownDetails.state
        }
        break;
      case 2:
        drillDownDetails = {
          ...this.rbacDetails,
          district: id ? id : this.drillDownDetails.district
        }
        break;
      case 3:
        drillDownDetails = {
          ...this.rbacDetails,
          block: id ? id : this.drillDownDetails.block
        }
        break;
      case 4:
        drillDownDetails = {
          ...this.rbacDetails,
          cluster: id ? id : this.drillDownDetails.cluster
        }
        break;
    }
    this.drillDownDetails = { ...drillDownDetails }

    let reportConfig = config;

    let { timeSeriesQueries, queries, levels, label, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;
    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(hierarchyLevel) === Number(filter.hierarchyLevel)) {
          queries = { ...filter?.actions?.queries }
          timeSeriesQueries = { ...filter?.timeSeriesQueries }
          Object.keys(queries).forEach((key) => {
            queries[key] = parseRbacFilter(queries[key], drillDownDetails)
            timeSeriesQueries[key] = parseRbacFilter(timeSeriesQueries[key], drillDownDetails)
          });
          return false
        }
        return true
      })
    } else {
      this._wrapperService.constructFilters(this.filters, filters);
    }

    Object.keys(queries).forEach((key: any) => {
      if (this.startDate !== undefined && this.endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
        onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], this.startDate, this.endDate)
      }
      else {
        onLoadQuery = queries[key]
      }
      let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, undefined);

      this.filterValues.forEach((filterParams: any) => {
        query = parseFilterToQuery(query, filterParams)
      });

      if (query && key === 'barChart') {
        this.getBarChartReportData(query, options, filters, defaultLevel);
      }
    });
  }


  ngOnDestroy(): void {
    this.drillDownSubscription.unsubscribe()
    this._benchmarkService.emit(null)
    this.benchmarkSubscription.unsubscribe()
  }


}


