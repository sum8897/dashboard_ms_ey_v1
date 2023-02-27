import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseTimeSeriesQuery, parseFilterToQuery } from 'src/app/utilities/QueryBuilder';
import { config } from 'src/app/views/teacher-statistics/config/teacher_statistics_config';

@Component({
  selector: 'app-ts-total-teachers',
  templateUrl: './ts-total-teachers.component.html',
  styleUrls: ['./ts-total-teachers.component.scss']
})
export class TsTotalTeachersComponent implements OnInit, OnChanges {
  reportName: string = 'ts_stat_total_teachers';
  filters: any = [];
  levels: any;
  tableReportData: any;
  bigNumberReportData: any = {
    reportName: "Total Teachers"
  };
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  filterIndex: any;
  rbacDetails: any;
  dropDownFilter :string
  @Output() bigNumberReport = new EventEmitter<any>();
  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;


  constructor(private readonly _commonService: CommonService, private readonly _wrapperService: WrapperService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }


  ngOnInit(): void {
    this.getReportData();
  }
  ngOnChanges() {
    
    this.getReportData()
  }




  getReportData(value?:string): void {
    this.dropDownFilter = value
    let reportConfig = config   


    let { queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;

    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          queries = filter?.actions?.queries
          Object.keys(queries).forEach((key) => {
            queries[key] = this.parseRbacFilter(queries[key])
          });
          return false
        }
        return true
      })
    }

    Object.keys(queries).forEach((key: any) => {
      onLoadQuery = queries[key]

      let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

      if (query && key === 'table') {
        if(this.dropDownFilter == undefined){
          this.getTableReportData(query, options);
        }
        let params = {columnName: "academic_year", value: this.dropDownFilter};
        let updatedquery= parseFilterToQuery(query,params)
        this.getTableReportData(updatedquery, options);
      }
      else if (query && key === 'bigNumber') {
        if(this.dropDownFilter == undefined){
          this.getBigNumberReportData(query, options, 'averagePercentage');
        }

        let params = {columnName: "academic_year", value: this.dropDownFilter};
        let updatedquery= parseFilterToQuery(query,params)
        this.getBigNumberReportData(updatedquery, options, 'averagePercentage');
      }

    })
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
      console.log('the data is ',res);
      let rows = res; 
      let { table: { columns } } = options;
      this.tableReportData = {
        data: rows.map(row => {
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

    });
  }

  async getBigNumberReportData(query: string, options: any, indicator: string): Promise<void> {
    let { bigNumber } = options ?? {};
    let { valueSuffix } = bigNumber ?? {};
    if (indicator === 'averagePercentage') {
      this.bigNumberReportData = {
        ...this.bigNumberReportData,
        valueSuffix: valueSuffix
      }
      await this._commonService.getReportDataNew(query).subscribe((res: any) => {
        if (res) {
          let rows = res;
          console.log('the dadsdsdsd',rows);
          this.bigNumberReportData = {
            ...this.bigNumberReportData,
            averagePercentage: rows[0].total_teachers,
            dropwownfilterDate:[{min_year:rows[0].min_year,max_year:rows[0].max_year}]
          }
          this.bigNumberReport.emit({
            data: this.bigNumberReportData,
            reportName: this.reportName
          })
        }
      })
    }

  }
}

