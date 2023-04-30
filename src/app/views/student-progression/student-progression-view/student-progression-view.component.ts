import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { config } from 'src/app/views/teacher-attendance/config/teacher_attendance_config';
import { buildQuery, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';


@Component({
  selector: 'app-student-progression-view',
  templateUrl: './student-progression-view.component.html',
  styleUrls: ['./student-progression-view.component.scss']
})
export class StudentProgressionViewComponent implements OnInit {
  reportName: string = 'tac_average_attendance_compliance';
  filters: any = [];
  levels: any;
  bigNumberData: any = {
    reportName: "Schools that have frozen Student Progression",
    averagePercentage: 72.23
  };
  tableReportData: any;
  rbacDetails: any;
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  // level = environment.config === 'NVSK' ? 'VSK' : 'district';
  filterIndex: any;
  title = {
    1:'District wise % Schools meeting UDISE Criteria',
    2:'Block wise % Schools meeting UDISE Criteria',
    3:'Cluster wise % Schools meeting UDISE Criteria',
    4:'School wise details of meeting UDISE Criteria								'
  }
  startDate: any;
  endDate: any;

  constructor(private readonly _commonService: CommonService,
    private readonly _wrapperService: WrapperService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(startDate = undefined, endDate = undefined): void {
    // this.startDate = startDate;
    // this.endDate = endDate;
    let reportConfig = config

    let { timeSeriesQueries, queries, levels,label, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;
    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          queries = {...filter?.actions?.queries}
          timeSeriesQueries = {...filter?.timeSeriesQueries}
          Object.keys(queries).forEach((key) => {
            queries[key] = this.parseRbacFilter(queries[key])
            timeSeriesQueries[key] = this.parseRbacFilter(timeSeriesQueries[key])
          });
          return false
        }
        return true
      })
    }
    else {
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
    let rows = [
      {
          "compliance_percentage": "54",
          "district_id": "25",
          "district_name": "RAMGARH"
      },
      {
          "compliance_percentage": "59",
          "district_id": "17",
          "district_name": "GUMLA"
      },
      {
          "compliance_percentage": "68",
          "district_id": "4",
          "district_name": "CHATRA"
      },
      {
          "compliance_percentage": "66",
          "district_id": "21",
          "district_name": "SARAIKELA-KHARSAWAN"
      },
      {
          "compliance_percentage": "54",
          "district_id": "16",
          "district_name": "LOHARDAGA"
      },
      {
          "compliance_percentage": "58",
          "district_id": "14",
          "district_name": "BOKARO"
      },
      {
          "compliance_percentage": "53",
          "district_id": "5",
          "district_name": "HAZARIBAG"
      },
      {
          "compliance_percentage": "51",
          "district_id": "24",
          "district_name": "KHUNTI"
      },
      {
          "compliance_percentage": "64",
          "district_id": "12",
          "district_name": "DUMKA"
      },
      {
          "compliance_percentage": "69",
          "district_id": "20",
          "district_name": "JAMTARA"
      },
      {
          "compliance_percentage": "66",
          "district_id": "3",
          "district_name": "PALAMU"
      },
      {
          "compliance_percentage": "61",
          "district_id": "7",
          "district_name": "GIRIDIH"
      },
      {
          "compliance_percentage": "45",
          "district_id": "15",
          "district_name": "RANCHI"
      },
      {
          "compliance_percentage": "65",
          "district_id": "11",
          "district_name": "PAKAUR"
      },
      {
          "compliance_percentage": "69",
          "district_id": "9",
          "district_name": "GODDA"
      },
      {
          "compliance_percentage": "53",
          "district_id": "19",
          "district_name": "PURBI SINGHBHUM"
      },
      {
          "compliance_percentage": "55",
          "district_id": "6",
          "district_name": "KODARMA"
      },
      {
          "compliance_percentage": "71",
          "district_id": "2",
          "district_name": "GARHWA"
      },
      {
          "compliance_percentage": "54",
          "district_id": "13",
          "district_name": "DHANBAD"
      },
      {
          "compliance_percentage": "61",
          "district_id": "22",
          "district_name": "SIMDEGA"
      },
      {
          "compliance_percentage": "69",
          "district_id": "18",
          "district_name": "PASHCHIMI SINGHBHUM"
      },
      {
          "compliance_percentage": "55",
          "district_id": "10",
          "district_name": "SAHIBGANJ"
      },
      {
          "compliance_percentage": "61",
          "district_id": "23",
          "district_name": "LATEHAR"
      },
      {
          "compliance_percentage": "71",
          "district_id": "8",
          "district_name": "DEOGHAR"
      }
  ];
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
    return
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
        let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
        // this.csv.csvDownload(reportsData)
      }
    });
  }

}
