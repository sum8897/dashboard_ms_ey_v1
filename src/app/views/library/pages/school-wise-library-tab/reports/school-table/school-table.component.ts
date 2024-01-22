import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery,parseFilterToQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { SchoolWiseLibraryTabComponent } from '../../school-wise-library-tab.component';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { CriteriaService } from 'src/app/core/services/criteria.service';
import { DataService } from 'src/app/core/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { config } from '../../../../config';


@Component({
  selector: 'app-school-table',
  templateUrl: './school-table.component.html',
  styleUrls: ['./school-table.component.scss']
})
export class SchoolTableComponent implements OnInit, OnDestroy {
  reportName: string = 'school_table_library';
  filters: any = [];
  levels: any;
  tableReportData: any;
  bigNumberReportData: any = {
    reportName: "School Wise Library"
  };
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  // level = environment.config === 'NVSK' ? 'VSK' : 'district';
  filterIndex: any;
  rbacDetails: any;
  title = 'Overall Summary';
  backUpData: any = [];
  criteriaApplied: boolean = false;
  searchText: any;
  searchFilterConfig: any;
  previousText: any;
  drillDownLevel: any;
  drillDownDetails: any;
  drillDownSubscription: any;
  hierarchy: any;
  filterValues:any;
  filterneed:any;
  metricFilter:any;
  selectedYear: any;
  selectedMonth: any;
  config: any;
  @Output() bigNumberReport = new EventEmitter<any>();
  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;
  @Output() exportReportData = new EventEmitter<any>();

  constructor(private spinner: NgxSpinnerService, private readonly _commonService: CommonService, private csv: SchoolWiseLibraryTabComponent, private readonly _wrapperService: WrapperService, private _rbacService: RbacService, private readonly _reportDrilldownService: ReportDrilldownService, private readonly _criteriaService: CriteriaService, private readonly _dataService: DataService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
      this.drillDownLevel = rbacDetails.role
    });

  }

  ngOnInit(): void {
    let { options: { searchBar_config } } = config[this.reportName];
    this.searchFilterConfig = {
      ...searchBar_config
    }
    this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(async (data) => {
      if (data && data.linkedReports?.includes(this.reportName) && data.hierarchyLevel) {
        this.drillDownLevel = data.hierarchyLevel
        this._criteriaService.emit('reset')
        this.criteriaApplied = false;
        // this.drilldownData(data);
        let result: any = await this._reportDrilldownService.drilldown(data, this.rbacDetails, config[this.reportName], this.startDate, this.endDate, this.drillDownDetails,this.filterValues, this.metricFilter,this.filterneed)
        this.drillDownDetails = result?.drillDownDetails
        this.tableReportData = result?.reportData
        if (this.tableReportData?.data?.length > 0) {
          let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
          this.csv.schoolCsvDownload(reportsData, this.drillDownLevel)
        }
      }
    })
   
    
  }

  searchTextUpdate(text: any) {
    this.searchFilterConfig = {
      ...this.searchFilterConfig,
      searchText: text
    }
   
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

  async getTableReportData(query, options, hierarchyLevel?) {
    this.hierarchy = hierarchyLevel;
    this.spinner.show();

    try {
      await this._commonService.getReportDataNew(query).subscribe((res: any) => {
        // this.spinner.show();
        if (this.drillDownLevel === hierarchyLevel) {
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
                    [col.property]: { value: col.type === 'number' ? Number(row[col.property]) : row[col.property] }
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
          };
          if (this.tableReportData?.data?.length > 0) {
            let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
            this.csv.schoolCsvDownload(reportsData, hierarchyLevel)
          }

        }
      });
    }
    catch (error) {
      console.log(error)
    }
    finally {
      this.spinner.hide();
    }

  }

  ngOnDestroy(): void {
    this.drillDownSubscription.unsubscribe();
  }
}