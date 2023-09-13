import Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType, PluginServiceRegistrationOptions, TimeScale } from 'chart.js';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from 'src/app/views/telemetry/config/telemetry_config';
import _ from "lodash";

interface TrendlineChartDataSets extends ChartDataSets {
  trendlineLinear?: PluginServiceRegistrationOptions;
}
var chart;

@Component({
  selector: 'app-telemetry-active-users-trendline',
  templateUrl: './telemetry-active-users-trendline.component.html',
  styleUrls: ['./telemetry-active-users-trendline.component.scss']
})
export class TelemetryActiveUsersTrendlineComponent implements OnInit, OnDestroy {
  reportName: string = 'active_users_trendline';
  filters: any = [];
  levels: any;
  tableReportData: any;
  minDate: any;
  maxDate: any;
  compareDateRange: any = 30;
  filterIndex: any;
  rbacDetails: any;
  title: any = "Daily Active Users"
  drillDownSubscription: any;


  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;
  @Input() chartConfig: any = {};
  constructor(private readonly _commonService: CommonService,
    private readonly _wrapperService: WrapperService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit() {
    // this.generateChart();
  }

  getReportData(values): void {
    let { filterValues, timeSeriesValues } = values ?? {};

    this.startDate = timeSeriesValues?.startDate;
    this.endDate = timeSeriesValues?.endDate;
    let reportConfig = config

    let { timeSeriesQueries, queries, levels, label, defaultLevel, filters, options } = reportConfig[this.reportName];
    let onLoadQuery;
    if (this.rbacDetails?.role !== undefined && this.rbacDetails?.role !== null) {
      filters.every((filter: any) => {
        if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
          queries = { ...filter?.actions?.queries }
          timeSeriesQueries = { ...filter?.timeSeriesQueries }
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
        let reportsData = {
          reportData: this.tableReportData.data,
          reportType: "table",
          reportName: this.title,
        };
        this.generateChart(this.tableReportData);
      }
      else {
        let data = null;
        this.generateChart(data)
      }
    });
  }

  updateChart(reportData) {

    var dates = reportData?.data?.map(data => {
      const dateValue = new Date(data.date.value);
      return dateValue.toLocaleDateString();
    });
    const values = reportData?.data?.map(data => data.user_count.value);

    chart.data.labels = dates;
    chart.data.datasets = [
      {
        data: [...values, 0, 100],
        label: '% Teacher Present',
        borderColor: 'green',
        fill: true,
        lineTension: 0,
      },
    ]
    chart.update()

  }


  generateChart(reportData) {
    if (chart) {
      chart.destroy();
      chart = null;
    }
    // const dates = reportData?.data?.map(data => moment(data.perc_teachers.value).format('YYYY-MM-DD'));
    var dates = reportData?.data?.map(data => {
      const dateValue = new Date(data.date.value);
      return dateValue.toLocaleDateString();
    });
    const values = reportData?.data?.map(data => data.user_count.value);
    const ctx = document.getElementById('trendlineChart') as HTMLCanvasElement;
    let defaultOptions = {
      type: 'line',

      data: {
        labels: dates,
        datasets: [
          {
            data: [...values],
            label: 'Active Users',
            borderColor: 'green',
            fill: true,
            lineTension: 0,

            // backgroundColor: 'rgba(0,255,0,0.3)',
          },
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Daily Active Users",
          fontStyle: "normal",
          fontColor: "#333"
        },
        hover: { mode: null },
        zoom: {
          // Boolean to enable zooming
          enabled: false,
          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          // mode: 'x',
        },
        tooltips: {
          callbacks: {
            label: function (context) {
              const value = context.value
              // return `Date: ${date}/n% Teacher Present: ${value}%`;
              return 'User Count: ' + value
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: (value) => {
                if (Number(value) % 1 === 0) {
                  return value;
                }
              }
            }
          }],
          x: {
            type: 'time',
            time: {
              unit: 'day'
            },
            grid: {
              display: false
            } as TimeScale
          },
          y: {

            suggestedMin: Math.min(...values),
            suggestedMax: Math.max(...values),
            grid: {
              display: false
            }
          }
        } as ChartOptions['scales'],
      },
    };
    defaultOptions = _.merge(defaultOptions, this.chartConfig);

    chart = new Chart(ctx, defaultOptions);
  }

  ngOnDestroy(): void {
    if (chart) {
      chart.destroy();
      chart = null;
    }
    this.drillDownSubscription.unsubscribe()
  }
}

