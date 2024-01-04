import Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType, PluginServiceRegistrationOptions, TimeScale } from 'chart.js';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseFilterToQuery,parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from '../../../../config/pat_config';
import { LoWisePerformanceTabComponent } from '../../lo-wise-performance-tab.component';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import _ from "lodash";
import { DataService } from 'src/app/core/services/data.service';

interface TrendlineChartDataSets extends ChartDataSets {
  trendlineLinear?: PluginServiceRegistrationOptions;
}

var chart;
@Component({
  selector: 'app-lo-trendline-chart',
  templateUrl: './lo-trendline-chart.component.html',
  styleUrls: ['./lo-trendline-chart.component.scss']
})
export class LoTrendlineChartComponent implements OnInit, OnDestroy {
  reportName: string = 'lo_trendline_chart';
  filters: any = [];
  levels: any;
  tableReportData: any;
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  metricFilter:any;
  // level = environment.config === 'NVSK' ? 'VSK' : 'district';
  filterIndex: any;
  rbacDetails: any;
  title: any = "Rank in % Average Score"
  drillDownSubscription: any;
  filterValues:any;
  filterneed:any;
  config: any;
  drillDownDetails: any;
  drillDownLevel: any
  @Output() exportReportData = new EventEmitter<any>();

  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;
  @Input() chartConfig: any = {};
  constructor(private readonly _commonService: CommonService,
    private readonly _wrapperService: WrapperService, private _rbacService: RbacService,private readonly _dataService: DataService, private readonly _reportDrilldownService: ReportDrilldownService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit() {


    this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(data => {
      if (data && data.hierarchyLevel) {
        this.drilldownData(data);
      }
    })
    // this.generateChart();
  }

//   getReportData(startDate = undefined, endDate = undefined): void {

//     this.startDate = startDate;
//     this.endDate = endDate;
//     let reportConfig = config

//     let { timeSeriesQueries, queries, levels, label, defaultLevel, filters, options } = reportConfig[this.reportName];
//     let onLoadQuery;
//     if (this.rbacDetails?.role) {
//       filters.every((filter: any) => {
//         if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
//           queries = { ...filter?.actions?.queries }
//           timeSeriesQueries = { ...filter?.timeSeriesQueries }
//           Object.keys(queries).forEach((key) => {
//             queries[key] = this.parseRbacFilter(queries[key])
//             timeSeriesQueries[key] = this.parseRbacFilter(timeSeriesQueries[key])
//           });
//           return false
//         }
//         return true
//       })
//     }

//     Object.keys(queries).forEach((key: any) => {
//       if (key.toLowerCase().includes('comparison')) {
//         let endDate = new Date();
//         let days = endDate.getDate() - this.compareDateRange;
//         let startDate = new Date();
//         startDate.setDate(days)
//         onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
//       }
//       else if (this.startDate !== undefined && this.endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
//         onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], this.startDate, this.endDate)
//       }
//       else {
//         onLoadQuery = queries[key]
//       }
//       let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);
// console.log('98linequery',query)
//       if (query && key === 'table') {
//         this.getTableReportData(query, options);
//       }
//     })
//   }

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
      else if (query && key === 'bigNumber ') {
        this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.tableReportData);
      }
      else if (query && key === 'bigNumberComparison') {
        this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'differencePercentage', this.tableReportData);
      }
      else if (query && key === 'barChart') {
        let { reportData, config } = await this._dataService.getBarChartReportData(query, options, filters, defaultLevel);
        this.tableReportData = reportData
        this.config = config;
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
  parseRbacFilter(query: string) {
    let newQuery = query;
    let startIndex = newQuery?.indexOf('{');
    let endIndex = newQuery?.indexOf('}');

    if (newQuery && startIndex > -1) {
      let propertyName = query.substring(startIndex + 1, endIndex);
      let re = new RegExp(`{${propertyName}}`, "g");
      Object.keys(this.rbacDetails).forEach((key: any) => {
        if (propertyName === key + '_id') {
          newQuery = newQuery.replace(re, '\'' + this.rbacDetails[key] + '\'');
        }
      });
    }
    return newQuery
  }

  getTableReportData(query, options): void {
    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let rows = res;
      let { table: { columns } } = options;
      this.tableReportData = {
        data: rows.map(row => {
          if (this.minDate !== undefined && this.maxDate !== undefined) {
            if (row['min_date'] < this.minDate) {
              this.minDate = row['min_date']
            }
            if (row['max_date'] > this.maxDate) {
              this.maxDate = row['max_date']
            }
          }
          else {
            this.minDate = row['min_date']
            this.maxDate = row['max_date']
          }
          columns.forEach((col: any) => {
            if (row[col.property]) {
              row = {
                ...row,
                [col.property]: { value: row[col.property] }
              }
            }
          });
          return row
        }),
        columns: columns.filter(col => {
          if (rows[0] && col.property in rows[0]) {
            return col;
          }
        })
      }
      if (this.tableReportData?.data?.length > 0) {
        let reportsData = {
          reportData: this.tableReportData.data,
          reportType: "table",
          reportName: this.title,
        };
        this.generateChart(this.tableReportData);
      }
      else {
        let data = null;
        this.generateChart(data)
      }
    });
  }


  async drilldownData(event: any) {
    let { hierarchyLevel, id } = event ?? {}
    let drillDownDetails;

    switch (Number(hierarchyLevel)) {
      case 1:
        drillDownDetails = {
          ...this.rbacDetails,
          state: id
        }
        break;
      case 2:
        drillDownDetails = {
          ...this.rbacDetails,
          district: id
        }
        break;
      case 3:
        drillDownDetails = {
          ...this.rbacDetails,
          block: id
        }
        break;
      case 4:
        drillDownDetails = {
          ...this.rbacDetails,
          cluster: id
        }
        break;
    }

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
      if (key.toLowerCase().includes('comparison')) {
        let endDate = new Date();
        let days = endDate.getDate() - this.compareDateRange;
        let startDate = new Date();
        startDate.setDate(days)
        onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
      }
      else if (this.startDate !== undefined && this.endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
        onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], this.startDate, this.endDate)
      }
      else {
        onLoadQuery = queries[key]
      }
      let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

      if (query && key === 'table') {
        this.getTableReportData(query, options);
      }
    });
  }


  updateChart(reportData) {

    var dates = reportData?.data?.map(data => {
      const dateValue = new Date(data.att_date.value);
      return dateValue.toLocaleDateString();
    });
    const values = reportData?.data?.map(data => data.perc_teachers.value);

    chart.data.labels = dates;
    chart.data.datasets = [
      {
        data: [...values, 0, 100],
        label: '% Teacher Present',
        borderColor: 'green',
        fill: true,
        lineTension: 0,
      },
    ]
    chart.update()

  }


  generateChart(reportData) {
    if (chart) {
      chart.destroy();
      chart = null;
    }
    // const dates = reportData?.data?.map(data => moment(data.perc_teachers.value).format('YYYY-MM-DD'));
    console.log('report data',reportData)
    var dates = reportData?.data?.map(data => {
      const dateValue = new Date(data.att_date.value);
      return dateValue.toLocaleDateString();
    });
    const values = reportData?.data?.map(data => data.perc_teachers.value);
    const ctx = document.getElementById('trendlineChart') as HTMLCanvasElement;
    let defaultOptions = {
      type: 'line',

      data: {
        labels: dates,
        datasets: [
          {
            data: [...values, 0, 100],
            label: '% Teacher Present',
            borderColor: 'green',
            fill: true,
            lineTension: 0,

            // backgroundColor: 'rgba(0,255,0,0.3)',
          },
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "% Teacher Present",
          fontStyle: "normal",
          fontColor: "#333"
        },
        hover: { mode: null },
        zoom: {
          // Boolean to enable zooming
          enabled: false,
          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          // mode: 'x',
        },
        tooltips: {
          callbacks: {
            label: function (context) {
              const value = context.value
              // return `Date: ${date}/n% Teacher Present: ${value}%`;
              return '% Teacher Present:' + value + '%'
            }
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            },
            grid: {
              display: false
            } as TimeScale
          },
          y: {

            suggestedMin: Math.min(...values),
            suggestedMax: Math.max(...values),
            grid: {
              display: false
            }
          }
        } as ChartOptions['scales'],
      },
    };
    defaultOptions = _.merge(defaultOptions, this.chartConfig);

    chart = new Chart(ctx, defaultOptions);
  }

  ngOnDestroy(): void {
    if (chart) {
      chart.destroy();
      chart = null;
    }
    this.drillDownSubscription.unsubscribe()
  }
}
