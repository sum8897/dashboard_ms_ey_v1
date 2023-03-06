import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseFilterToQuery, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from 'src/app/views/review-meetings/config/review_meetings_config';

@Component({
  selector: 'app-review-meetings-conducted-bignumber',
  templateUrl: './review-meetings-conducted-bignumber.component.html',
  styleUrls: ['./review-meetings-conducted-bignumber.component.scss']
})
export class ReviewMeetingsConductedBignumberComponent implements OnInit {
  reportName: string = 'review_meetings_conducted_bignumber';
  filters: any = [];
  levels: any;
  bigNumberReportData: any = {
    reportName: "% Districts which conducted meeting"
  };
  title: string = 'Average Review Meetings Conducted'
  selectedYear: any;
  selectedMonth: any;
  compareDateRange: any = 30;
  filterIndex: any;
  rbacDetails: any;

  constructor(private readonly _commonService: CommonService, private readonly _wrapperService: WrapperService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit(): void {
    // this.getReportData();
  }

  getReportData(filterValues?: any): void {
    let reportConfig = config

    let { timeSeriesQueries, queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;
    let currentLevel;

    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          queries = {...filter?.actions?.queries}
          currentLevel = filter?.actions?.level;
          Object.keys(queries).forEach((key) => {
            queries[key] = this.parseRbacFilter(queries[key])
          });
          return false
        }
        return true
      })
    }

    Object.keys(queries).forEach((key: any) => {
      if (key.toLowerCase().includes('comparison')) {
        let endDate = new Date();
        let days = endDate.getDate() - this.compareDateRange;
        let startDate = new Date();
        startDate.setDate(days)
        onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
      }
      else {
        onLoadQuery = queries[key]
      }
      let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, undefined, undefined, key, this.compareDateRange);

      filterValues.forEach((filterParams: any) => {
        query = parseFilterToQuery(query, filterParams)
      });
      
      if (query && key === 'bigNumber') {
        this.getBigNumberReportData(query, options, 'averagePercentage', currentLevel);
      }
      else if (query && key === 'bigNumberComparison') {
        this.getBigNumberReportData(query, options, 'differencePercentage', currentLevel)
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

  async getBigNumberReportData(query: string, options: any, indicator: string, currentLevel: string): Promise<void> {
    let { bigNumber } = options ?? {};
    let { valueSuffix, property } = bigNumber ?? {};
    if (indicator === 'averagePercentage') {
      this.bigNumberReportData = {
        ...this.bigNumberReportData,
        valueSuffix: valueSuffix
      }
      await this._commonService.getReportDataRev(query).subscribe((res: any) => {
        if (res) {
          let rows = res;
          console.log(currentLevel[0].toUpperCase() + currentLevel.substring(1) + 's')
          this.bigNumberReportData = {
            ...this.bigNumberReportData,
            reportName: `% ${currentLevel[0].toUpperCase() + currentLevel.substring(1)}s which conducted meeting`,
            averagePercentage: rows[0]?.[property]
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
            reportName: `% ${currentLevel[0].toUpperCase() + currentLevel.substring(1)}s which conducted meeting`,
            differencePercentage: rows[0]?.[property]
          }
        }
      })
    }
  }
}
