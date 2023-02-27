import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';

import { config } from 'src/app/views/school-statistics/config/school_statistics_config';

@Component({
  selector: 'app-total-schools',
  templateUrl: './total-schools.component.html',
  styleUrls: ['./total-schools.component.scss']
})
export class TotalSchoolsComponent implements OnInit {
  reportName: string = 'scl_stat_total_school';
  filters: any = [];
  levels: any;
  tableReportData: any;
  bigNumberReportData: any = {
    reportName: "Total School"
  };
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  filterIndex: any;
  rbacDetails: any;

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

  getReportData(): void {
    let reportConfig = config

    let {  queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;

    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          queries = {...filter?.actions?.queries}
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
        this.getTableReportData(query, options);
      }
      else if (query && key === 'bigNumber') {
        this.getBigNumberReportData(query, options, 'averagePercentage');
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
          console.log('rowd data',res);
          this.bigNumberReportData = {
            ...this.bigNumberReportData,
            averagePercentage: rows[0].total_schools
          }
          this.bigNumberReport.emit({
            data: this.bigNumberReportData,
            reportName:this.reportName
          })
        }
      })
    }
    
  }
}
