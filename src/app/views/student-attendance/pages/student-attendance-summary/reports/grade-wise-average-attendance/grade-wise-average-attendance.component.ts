import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getBarDatasetConfig, getChartJSConfig } from 'src/app/core/config/ChartjsConfig';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';
import { buildQuery, multibarGroupBy, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from 'src/app/views/student-attendance/config/student_attendance_config';
import { StudentAttendanceSummaryComponent } from '../../student-attendance-summary.component';

@Component({
  selector: 'app-grade-wise-average-attendance',
  templateUrl: './grade-wise-average-attendance.component.html',
  styleUrls: ['./grade-wise-average-attendance.component.scss']
})
export class GradeWiseAverageAttendanceComponent implements OnInit {

  title: any;
  chartHeight: any;
  marginTop: any;
  config;
  data;
  fileName: string = "Grade Wise Average Attendance";
  reportName: string = 'sas_grade_wise_average_attendance';
  filters: any = [];
  levels: any;
  tableReportData: any;
  minDate: any;
  maxDate: any;
  filterIndex: any;
  currentHierarchyLevel: any = 1;
  rbacDetails: any;

  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;

  constructor(private readonly _commonService: CommonService, private readonly _wrapperService: WrapperService,
    private csv: StudentAttendanceSummaryComponent,
    private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit(): void {
    // this.getReportData();
  }

  async getReportData(startDate = undefined, endDate = undefined): Promise<void> {
    this.startDate = startDate;
    this.endDate = endDate;
    let reportConfig = config

    let { timeSeriesQueries, queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;

    if (this.rbacDetails?.role) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          queries = { ...filter?.actions?.queries }
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

    Object.keys(queries).forEach((key: any) => {
      if (this.startDate !== undefined && this.endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
        onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], this.startDate, this.endDate)
      }
      let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key);

      if (query && key === 'barChart') {
        this.getBarChartReportData(query, options, filters, defaultLevel);
      }


    })
  }

  getBarChartReportData(query, options, filters, defaultLevel): void {
    let { barChart: { yAxis, xAxis, isMultibar, metricLabel, metricValue } } = options;
    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let rows = res;
      // if(isMultibar){
      //   rows = multibarGroupBy(rows, xAxis.label, metricLabel, metricValue);
      // }
      this.tableReportData = {
        values: rows
      }
      this.config = getChartJSConfig({
        labelExpr: xAxis.value,
        datasets: getBarDatasetConfig(
          [{
            dataExpr: metricValue, label: metricLabel
          }]),

        options: {
          height: (rows.length * 15 + 150).toString(),
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                let multistringText = [];
                // if (tooltipItem.datasetIndex === 0) {
                //   xAxis.metrics.forEach((metric: any) => {
                //     multistringText.push(`${metric.label}: ${formatNumberForReport(rows[tooltipItem.index][metric.value])}`);
                //   });
                // }
                multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value}%`)
                return multistringText;
              }
            }
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
                callback: function (value, index, values) {
                  let newValue = value.split('_').map((word: any) => word[0].toUpperCase() + word.substring(1)).join(' ')
                  if (screen.width <= 768) {
                    return newValue.substr(0, 8) + '...';
                  } else {
                    return newValue;
                  }
                }
              }
            }]
          }
        }
      });
      if (this.tableReportData?.data?.length > 0) {
        let reportsData = { reportData: this.tableReportData.values, reportType: 'dashletBar', reportName: this.fileName }
        this.csv.csvDownload(reportsData)
      }
    });
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

  getYaxisTitle(filters: any): string {
    let title: string;
    filters.forEach((filter: any) => {
      if (Number(filter.hierarchyLevel) === this.currentHierarchyLevel - 1) {
        title = filter?.actions?.level;
      }
    });
    return title;
  }
}
