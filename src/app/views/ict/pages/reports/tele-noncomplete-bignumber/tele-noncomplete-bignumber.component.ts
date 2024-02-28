import { Component, EventEmitter, Input, OnDestroy, OnInit,Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseFilterToQuery,parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { DataService } from 'src/app/core/services/data.service';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { BarchartBenchmarkService } from 'src/app/core/services/barchart-benchmark/barchart-benchmark.service';
import { TeleEducationTabComponent } from 'src/app/views/ict/pages/tele-education-tab/tele-education-tab.component';
import { config } from 'src/app/views/ict/config/ict_config';
@Component({
  selector: 'app-tele-noncomplete-bignumber',
  templateUrl: './tele-noncomplete-bignumber.component.html',
  styleUrls: ['./tele-noncomplete-bignumber.component.scss']
})
export class TeleNoncompleteBignumberComponent implements OnInit, OnDestroy {

  reportName: string = 'tele_noncomplete_bignumber';
  filters: any = [];
  levels: any;
  tableReportData: any;
  bigNumberReportData: any = {
    reportName: "Not Connected"
  };
  currentReportName: string = "Not Connected";
  minDate: any;
  maxDate: any;
  compareDateRange: any = 7;
  filterIndex: any;
  rbacDetails: any;
  title = 'Score Summary %';
  @Input() startDate: any;
  @Input() endDate: any;
  drillDownSubscription: any;
  drillDownLevel: any;
  hierarchy: any;
  filterValues:any;
  filterneed:any;
  metricFilter:any;
  selectedYear: any;
  selectedMonth: any;
  config: any;
  drillDownDetails: any;
  @Output() exportReportData = new EventEmitter<any>();


  constructor(private readonly _commonService: CommonService,
    private csv: TeleEducationTabComponent, 
    private readonly _wrapperService: WrapperService, 
    private _rbacService: RbacService, 
    private readonly _reportDrilldownService: ReportDrilldownService,
    private readonly _dataService: DataService,
    private readonly _benchmarkService: BarchartBenchmarkService
    ) {
    
  }
  ngOnInit(): void {
    this.drillDownSubscription = this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
    console.log('subscription',this.drillDownSubscription)
    this._reportDrilldownService.drilldownData.subscribe(data => {
      console.log('data',data)
      if(data && data?.linkedReports?.includes(this.reportName) && data.hierarchyLevel) {
        this.drillDownLevel = data.hierarchyLevel
        this.drilldownData(data);
        // data.values ?? {}
      }
    })
    
    
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
        console.log('outside query',query)

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

        else if (query && key === 'bigNumber' && filterneed) {
          this.getBigNumberReportData(query, options, 'averagePercentage');
          // this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.tableReportData);
          // console.log('tablereportdat',this.tableReportData)
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
 
  async getBigNumberReportData(query: string, options: any, indicator: string): Promise<void> {
    let { bigNumber } = options ?? {};
    let { valueSuffix, property } = bigNumber ?? {};
  
    if (indicator === 'averagePercentage') {
      this.bigNumberReportData = {
        ...this.bigNumberReportData,
        valueSuffix: valueSuffix,
        
      }
      console.log('bigNumberreportdata line 222',this.bigNumberReportData)
      await this._commonService.getReportDataNew(query).subscribe((res: any) => {
     
        if (res) {
          let rows = res;
          this.bigNumberReportData = {
            ...this.bigNumberReportData,
            averagePercentage: rows[0]?.[property]
          }
          let benchmarkValues;
          this._benchmarkService.getValues().subscribe((obj: any) => {
            let level = this.drillDownLevel ? this.drillDownLevel : this.rbacDetails.role
            if(obj && Object.keys(obj).includes(this.reportName) && rows[0]?.[property]) {
              benchmarkValues = {
                ...obj,
                [this.reportName]: {
                  ...obj[this.reportName],
                  [level]: rows[0]?.[property]
                }
              }
            }
            else if (obj && rows[0]?.[property]){
              benchmarkValues = {
                ...obj,
                [this.reportName]: {
                  [level]: rows[0]?.[property]
                }
              }
            }
            else if(rows[0]?.[property]) {
              benchmarkValues = {
                [this.reportName]: {
                  [level]: rows[0]?.[property]
                }
              }
            }
          })
          if(benchmarkValues) {
            this._benchmarkService.emit(benchmarkValues)
          }
          
        }
      })
    }
    else if (indicator === 'differencePercentage') {
      await this._commonService.getReportDataNew(query).subscribe((res: any) => {
        if (res) {
          let rows = res;
          this.bigNumberReportData = {
            ...this.bigNumberReportData,
            differencePercentage: rows[0]?.[property]
          }
        }
      })
    }
    
  }

  async drilldownData(event: any) {
    // let { filterValues, timeSeriesValues, filterneed } = values ?? { filterValues: [], timeSeriesValues: [], filterneed:[] };
    // if (filterValues === undefined) {
    //   filterValues = []
    // }
    // this.metricFilter = [...filterValues].filter((filter: any) => {
    //   return filter.filterType === 'metric'
    // })
    // this.filterValues = [...filterValues].filter((filter: any) => {
    //   return filter.filterType !== 'metric'
    // })


    let { hierarchyLevel, id } = event ?? {}
    let drillDownDetails;

    switch (Number(hierarchyLevel)) {
      case 1:
        drillDownDetails = {
          ...this.rbacDetails,
          state: id
        }
        this.bigNumberReportData={...this.bigNumberReportData,
          reportName:this.currentReportName
        
        }
        break;
      case 2:
        drillDownDetails = {
          ...this.rbacDetails,
          district: id
        }
        this.bigNumberReportData={...this.bigNumberReportData,
          reportName:this.currentReportName+ ` for ${event?.district_name || event[event.district]} District`
        
        }
        break;
      case 3:
        drillDownDetails = {
          ...this.rbacDetails,
          block: id
        }
        this.bigNumberReportData={...this.bigNumberReportData,
          reportName:this.currentReportName+ ` for ${event?.block_name || event[event.block]} Block`
        
        }
        break;
      case 4:
        drillDownDetails = {
          ...this.rbacDetails,
          cluster: id
        }
        this.bigNumberReportData={...this.bigNumberReportData,
          reportName:this.currentReportName+ ` for ${event?.cluster_name || event[event.cluster]} Cluster`
        
        }
        break;

    }
    

    let reportConfig = config;

    let { timeSeriesQueries, queries, levels,label, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;
    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(hierarchyLevel) === Number(filter.hierarchyLevel)) {
          queries = {...filter?.actions?.queries}
          timeSeriesQueries = {...filter?.timeSeriesQueries}
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
      // let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

      // let metricFilter = [...filterValues].filter((filter: any) => {
      //   return filter.filterType === 'metric'
      // })
     

      this.filterValues.forEach((filterParams: any) => {
        query = parseFilterToQuery(query, filterParams)
      });
     
      console.log('inside drilldown',query)

      if (query && key === 'bigNumber') {
        this.getBigNumberReportData(query, options, 'averagePercentage');
      }
    });
  }

  ngOnDestroy(): void {
    this.drillDownSubscription.unsubscribe()
  }

}
