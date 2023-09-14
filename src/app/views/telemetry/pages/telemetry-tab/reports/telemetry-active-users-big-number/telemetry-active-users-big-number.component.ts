import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from '../../../../config/telemetry_config';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-telemetry-active-users-big-number',
  templateUrl: './telemetry-active-users-big-number.component.html',
  styleUrls: ['./telemetry-active-users-big-number.component.scss']
})
export class TelemetryActiveUsersBigNumberComponent implements OnInit, OnDestroy {

  reportName: string = 'active_users_bignumber';
  filters: any = [];
  levels: any;
  tableReportData: any;
  bigNumberReportData: any = {
    reportName: "Total Active Users"
  };
  currentReportName: string = "Telemetry";
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  filterIndex: any;
  rbacDetails: any;
  title = 'Total Active Users';
  @Input() startDate: any;
  @Input() endDate: any;
  drillDownSubscription: any;
  drillDownLevel: any;


  constructor(private readonly _commonService: CommonService,
    private _dataService: DataService,
    private _rbacService: RbacService,
  ) {

  }
  ngOnInit(): void {
    this.drillDownSubscription = this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
    // this.getReportData();
  }

  getReportData(values): void {
    console.log(values)
    let { filterValues, timeSeriesValues } = values ?? {};

    this.startDate = timeSeriesValues?.startDate;
    this.endDate = timeSeriesValues?.endDate;
    let reportConfig = config
    let { timeSeriesQueries, queries, levels, label, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;
    if (this.rbacDetails?.role !== undefined && this.rbacDetails?.role !== null) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          timeSeriesQueries = { ...filter?.timeSeriesQueries }
          Object.keys(timeSeriesQueries).forEach((key) => {
            timeSeriesQueries[key] = this.parseRbacFilter(timeSeriesQueries[key])
          });
          return false
        }
        return true
      })
    }

    Object.keys(timeSeriesQueries).forEach(async (key: any) => {
      if (key.toLowerCase().includes('comparison')) {
        let endDate = new Date();
        let days = endDate.getDate() - this.compareDateRange;
        let startDate = new Date();
        startDate.setDate(days)
        onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
      }
      else if (this.startDate !== undefined && this.endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
        onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], this.startDate, this.endDate)
      }
      else {
        onLoadQuery = queries[key]
      }
      let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

      // if (query && key === 'bigNumber') {
      //   this.getBigNumberReportData(query, options, 'averagePercentage');
      // }
      if (query && key === 'bigNumber') {
        this.bigNumberReportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.bigNumberReportData);
      }
    })
  }

  parseRbacFilter(query: string) {
    let newQuery = query;

    let startIndex = newQuery?.indexOf('{');
    let endIndex = newQuery?.indexOf('}');

    while (startIndex > -1 && endIndex > -1) {
      if (newQuery && startIndex > -1) {
        let propertyName = newQuery.substring(startIndex + 1, endIndex);
        let re = new RegExp(`{${propertyName}}`, "g");

        Object.keys(this.rbacDetails).forEach((key: any) => {
          if (propertyName === key + '_id') {
            newQuery = newQuery.replace(re, '\'' + this.rbacDetails[key] + '\'');
          }
        });
      }
      startIndex = newQuery?.indexOf('{');
      endIndex = newQuery?.indexOf('}');
    }
    return newQuery
  }

  // async getBigNumberReportData(query: string, options: any, indicator: string): Promise<void> {
  //   let { bigNumber } = options ?? {};
  //   let { valueSuffix, property } = bigNumber ?? {};

  //   if (indicator === 'averagePercentage') {
  //     this.bigNumberReportData = {
  //       ...this.bigNumberReportData,
  //       valueSuffix: valueSuffix,

  //     }
  //     await this._commonService.getReportDataNew(query).subscribe((res: any) => {

  //       if (res) {
  //         let rows = res;
  //         this.bigNumberReportData = {
  //           ...this.bigNumberReportData,
  //           averagePercentage: rows[0]?.[property]
  //         }
  //       }
  //     })
  //   }
  //   else if (indicator === 'differencePercentage') {
  //     await this._commonService.getReportDataNew(query).subscribe((res: any) => {
  //       if (res) {
  //         let rows = res;
  //         this.bigNumberReportData = {
  //           ...this.bigNumberReportData,
  //           differencePercentage: rows[0]?.[property]
  //         }
  //       }
  //     })
  //   }

  // }

  ngOnDestroy(): void {
    // this.drillDownSubscription.unsubscribe()
  }

}
