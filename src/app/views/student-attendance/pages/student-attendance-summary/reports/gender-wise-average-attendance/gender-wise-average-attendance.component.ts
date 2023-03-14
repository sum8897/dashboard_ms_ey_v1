import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getBarDatasetConfig, getChartJSConfig } from 'src/app/core/config/ChartjsConfig';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';
import { buildQuery, multibarGroupBy, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from 'src/app/views/student-attendance/config/student_attendance_config';
import { StudentAttendanceSummaryComponent } from '../../student-attendance-summary.component';

@Component({
  selector: 'app-gender-wise-average-attendance',
  templateUrl: './gender-wise-average-attendance.component.html',
  styleUrls: ['./gender-wise-average-attendance.component.scss']
})
export class GenderWiseAverageAttendanceComponent implements OnInit {

  title: any;
  chartHeight: any;
  marginTop: any;
  config;
  data;
  fileName: string = "Gender Wise Average Attendance";
  reportName: string = 'sas_gender_wise_average_attendance';
  filters: any = [];
  levels: any;
  tableReportData: any;
  minDate: any;
  maxDate: any;
  filterIndex: any;
  currentHierarchyLevel: any = 1;
  rbacDetails: any;
  pageSize: any;

  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;

  constructor(private readonly _commonService: CommonService,private csv :StudentAttendanceSummaryComponent,
     private readonly _wrapperService: WrapperService, private _rbacService: RbacService) { 
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
          queries = {...filter?.actions?.queries}
          timeSeriesQueries = {...filter?.timeSeriesQueries}
          Object.keys(queries).forEach((key) => {
            timeSeriesQueries[key] = parseRbacFilter(timeSeriesQueries[key], this.rbacDetails)
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
      rows = [
        {
          "district": "BALOD",
          "goverment aided schools recieved textbook": 77.9,
          "schools having drinking water": 100,
          "schools having electricity": 99.6,
          "schools having toilet": 99.8,
          "schools having ramp": 93.1
        },
        {
          "district": "BALODABAZAR",
          "goverment aided schools recieved textbook": 77.2,
          "schools having drinking water": 100,
          "schools having electricity": 96.5,
          "schools having toilet": 100,
          "schools having ramp": 78.2
        },
        {
          "district": "BALRAMPUR",
          "goverment aided schools recieved textbook": 73.2,
          "schools having drinking water": 100,
          "schools having electricity": 88.8,
          "schools having toilet": 99.7,
          "schools having ramp": 87.3
        },
        {
          "district": "BASTER",
          "goverment aided schools recieved textbook": 78.5,
          "schools having drinking water": 98.1,
          "schools having electricity": 92.4,
          "schools having toilet": 98.8,
          "schools having ramp": 70.3
        }
       ]
      // if(isMultibar){
      //   rows = multibarGroupBy(rows, xAxis.label, metricLabel, metricValue);
      // }
      this.tableReportData = {
        values: rows
      }
      this.config = getChartJSConfig({
        // labelExpr: xAxis.value,
        labelExpr: 'district',
        datasets: getBarDatasetConfig(
        // [{
        //   dataExpr: metricValue, label: metricLabel
        // }]),
        [
          {
            dataExpr: 'goverment aided schools recieved textbook', label: 'goverment aided schools recieved textbook', options: {barThickness: 10}
          },
          {
            dataExpr: 'schools having drinking water', label: 'schools having drinking water',options: {barThickness: 10}
          },
          {
            dataExpr: 'schools having electricity', label: 'schools having electricity',options: {barThickness: 10}
          },
          {
            dataExpr: 'schools having toilet', label: 'schools having toilet',options: {barThickness: 10}
          },
          {
            dataExpr: 'schools having ramp', label: 'schools having ramp',options: {barThickness: 10}
          }
        ]),
    
        options: {
          height: (rows.length * 15 + 150).toString(),
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                let multistringText = [];
                let metrics = [
                  {
                    value: 'goverment aided schools recieved textbook', label: 'goverment aided schools recieved textbook'
                  },
                  {
                    value: 'schools having drinking water', label: 'schools having drinking water'
                  },
                  {
                    value: 'schools having electricity', label: 'schools having electricity'
                  },
                  {
                    value: 'schools having toilet', label: 'schools having toilet'
                  },
                  {
                    value: 'schools having ramp', label: 'schools having ramp'
                  }
                ]
                if (tooltipItem.datasetIndex === 0) {
                  metrics.forEach((metric: any) => {
                    multistringText.push(`${metric.label}: ${formatNumberForReport(rows[tooltipItem.index][metric.value])}`);
                  });
                }
                // multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value}%`)

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
                callback: function(value, index, values) {
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
      if (this.tableReportData?.values?.length > 0) {
        let reportsData = { reportData: this.tableReportData.values, reportType: 'dashletBar', reportName: this.fileName }
        this.csv.csvDownload(reportsData)
      }
    });
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
