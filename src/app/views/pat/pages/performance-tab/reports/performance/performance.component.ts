import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { DataService } from 'src/app/core/services/data.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseFilterToQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder'
import { config } from '../../../../config/pat_config'
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  reportName: string = 'student_availability';
  filters: any = [];
  levels: any;
  reportData: any = {
    reportName: "Student Availability"
  };
  title: string = ''
  selectedYear: any;
  selectedMonth: any;
  // startDate: any;
  // endDate: any;
  tableReportData: any;
  config: any;
  compareDateRange: any = 30;
  filterIndex: any;
  rbacDetails: any;
  drillDownSubscription: any;
  drillDownDetails: any;
  drillDownLevel: any;
  filterValues:any;
  filterneed:any;
  metricFilter:any;

  @Output() exportReportData = new EventEmitter<any>();
  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;

  constructor(private readonly _dataService: DataService,
    private readonly _wrapperService: WrapperService,
    private _rbacService: RbacService,
    private readonly _commonService: CommonService,
    private readonly _drillDownService: ReportDrilldownService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit(): void {
    this.drillDownSubscription = this._drillDownService.drilldownData.subscribe(async (data) => {
      if (data && data !== 'reset') {
        console.log("reportData:",this.drillDownLevel)
        this.drillDownLevel = data.hierarchyLevel
        let result: any = await this._drillDownService.drilldown(data, this.rbacDetails, config[this.reportName], this.startDate, this.endDate, this.drillDownDetails, this.filterValues, this.metricFilter,this.filterneed)
        
        this.drillDownDetails = result?.drillDownDetails
       
        this.reportData = result?.reportData
        // console.log("reportData:",this.reportData)
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
    // console.log("reportData:",this.drillDownDetails)
     if (this.drillDownDetails !== undefined) {
      let result: any = await this._drillDownService.drilldown({ hierarchyLevel: this.drillDownLevel }, this.rbacDetails, config[this.reportName], startDate, endDate, this.drillDownDetails, this.filterValues,this.metricFilter,this.filterneed)
      this.drillDownDetails = result?.drillDownDetails
      this.reportData = result?.reportData
      
    }
    else {
      // console.log("hello click===================", this.drillDownDetails)
      this.drillDownLevel = undefined;
      let { filterValues, timeSeriesValues } = values ?? { filterValues: [], timeSeriesValues: [] };
      if (filterValues === undefined) {
        filterValues = []
      }
    
      // this.filterValues = filterValues
      // this.startDate = timeSeriesValues?.startDate;
      // this.endDate = timeSeriesValues?.endDate;
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
        }
        else if (this.startDate !== undefined && this.endDate !== undefined) {
          onLoadQuery = parseTimeSeriesQuery(queries[key], this.startDate, this.endDate)
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
        if (query && key === 'table') {
          this.reportData = await this._dataService.getTableReportData(query, options);
          if (this.reportData?.data?.length > 0) {
            let reportsData = { reportData: this.reportData.data, reportType: 'table', reportName: this.title }
            this.exportReportData.emit(reportsData)
          }
        }
        else if (query && key === 'bigNumber') {
          this.reportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.reportData);
        }
        else if (query && key === 'bigNumberComparison') {
          this.reportData = await this._dataService.getBigNumberReportData(query, options, 'differencePercentage', this.reportData);
        }
        else if (query && key === 'barChart') {
          let { reportData, config } = await this._dataService.getBarChartReportData(query, options, filters, defaultLevel);
          this.reportData = reportData
          this.config = config;
          if (this.reportData?.values?.length > 0) {
            let reportsData = { reportData: this.reportData.values, reportType: 'dashletBar', reportName: this.title }
            this.exportReportData.emit(reportsData)
          }
        }
        
        else if (query && key === 'map' && filterneed) {
          this.reportData = await this._dataService.getMapReportData(query, options, metricFilter)
          
          if (this.reportData?.data?.length > 0) {
            let reportsData = { reportData: this.reportData.data, reportType: 'map', reportName: this.title }
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
  // async getReportData(values: any,startDate: any, endDate : any): Promise<void> {

    
  //   let { filterValues, timeSeriesValues, filterneed } = values ?? { filterValues: [], timeSeriesValues: [], filterneed:[] };
  //   if (filterValues === undefined) {
  //     filterValues = []
  //   }
  //   this.metricFilter = [...filterValues].filter((filter: any) => {
  //     return filter.filterType === 'metric'
  //   })
  //   this.filterValues = [...filterValues].filter((filter: any) => {
  //     return filter.filterType !== 'metric'
  //   })
  //   this.filterneed=filterneed;
  //   console.log('lo-wise filterneed',this.filterneed)
  //   // console.log("reportData:",this.drillDownDetails)
  //    if (this.drillDownDetails !== undefined) {
  //     let result: any = await this._drillDownService.drilldown({ hierarchyLevel: this.drillDownLevel }, this.rbacDetails, config[this.reportName], startDate, endDate, this.drillDownDetails, this.filterValues,this.metricFilter,this.filterneed)
  //     this.drillDownDetails = result?.drillDownDetails
  //     this.tableReportData = result?.reportData
      
  //   }
  //   else {
  //     // console.log("hello click===================", this.drillDownDetails)
  //     this.drillDownLevel = undefined;
  //     let { filterValues, timeSeriesValues } = values ?? { filterValues: [], timeSeriesValues: [] };
  //     if (filterValues === undefined) {
  //       filterValues = []
  //     }
    
  //     // this.filterValues = filterValues
  //     this.startDate = startDate;
  //     this.endDate = endDate;
  //     let reportConfig = config

  //     let { timeSeriesQueries, queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
  //     let onLoadQuery;
  //     let currentLevel;

  //     if (this.rbacDetails?.role) {
  //       filters.every((filter: any) => {
  //         if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
  //           queries = { ...filter?.actions?.queries }
  //           Object.keys(queries).forEach((key) => {
  //             queries[key] = parseRbacFilter(queries[key], this.rbacDetails)
  //           });
  //           return false
  //         }
  //         return true
  //       })
  //     }

  //     Object.keys(queries).forEach(async (key: any) => {
  //       if (this.startDate === undefined && this.endDate === undefined) {
  //         let endDate = new Date();
  //         let days = endDate.getDate() - this.compareDateRange;
  //         let startDate = new Date();
  //         startDate.setDate(days)
          
  //         onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
  //         console.log('237',this.startDate,this.endDate)
  //       }
  //       else if (this.startDate !== undefined && this.endDate !== undefined) {
  //         onLoadQuery = parseTimeSeriesQuery(queries[key], this.startDate, this.endDate)
  //         console.log('241')
  //       }

  //       let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

  //       let metricFilter = [...filterValues].filter((filter: any) => {
  //         return filter.filterType === 'metric'
  //       })
       

  //       this.filterValues.forEach((filterParams: any) => {
  //         query = parseFilterToQuery(query, filterParams)
  //       });
  //       console.log(key,filterneed)
  //       console.log(query)
  //       if (query && key === 'table'&& filterneed) {
  //         this.tableReportData = await this._dataService.getTableReportData(query, options);
  //         if (this.tableReportData?.data?.length > 0) {
  //           let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
  //           this.exportReportData.emit(reportsData)
  //         }
  //       }
  //       else if (query && key === 'bigNumber') {
  //         this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.tableReportData);
  //       }
  //       else if (query && key === 'bigNumberComparison') {
  //         this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'differencePercentage', this.tableReportData);
  //       }
  //       else if (query && key === 'barChart') {
  //         let { reportData, config } = await this._dataService.getBarChartReportData(query, options, filters, defaultLevel);
  //         this.tableReportData = reportData
  //         this.config = config;
  //         if (this.tableReportData?.values?.length > 0) {
  //           let reportsData = { reportData: this.tableReportData.values, reportType: 'dashletBar', reportName: this.title }
  //           this.exportReportData.emit(reportsData)
  //         }
  //       }
        
  //       else if (query && key === 'map' && filterneed) {
  //         this.tableReportData = await this._dataService.getMapReportData(query, options, metricFilter)
          
  //         if (this.tableReportData?.data?.length > 0) {
  //           let reportsData = { reportData: this.tableReportData.data, reportType: 'map', reportName: this.title }
  //           // console.log("report_dat:",reportsData,query)
  //           this.exportReportData.emit(reportsData)
  //         }
  //       }
       
  //     })
  //   }
  //   }

    ngOnDestroy(): void {
      this._drillDownService.emit('reset')
      this.drillDownSubscription.unsubscribe()
    }

}
