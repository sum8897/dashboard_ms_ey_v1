import { Injectable } from '@angular/core';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';
import { getBarDatasetConfig, getChartJSConfig } from '../config/ChartjsConfig';
import { CommonService } from './common/common.service';
import * as _ from 'lodash';
import { WrapperService } from './wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _commonService: CommonService, private _wrapperService: WrapperService) { }

  getTableReportData(query, options): Promise<any> {
    return new Promise((resolve, reject) => {
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        let { table: { columns } } = options;
        let reportData = {
          data: rows.map(row => {
            columns.forEach((col: any) => {
              if (row[col.property] !== null || row[col.property] !== undefined) {
                row = {
                  ...row,
                  [col.property]: { value: row[col.property] }
                }
              }
            });
            return row;
          }),
          columns: columns.filter(col => {
            if (rows[0] && col.property in rows[0]) {
              return col;
            }
          })
        }
        resolve(reportData);
      })
    });
  }

  getBigNumberReportData(query: string, options: any, indicator: string, prevReportData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let { bigNumber } = options ?? {};
      let { valueSuffix, property } = bigNumber ?? {};
      let reportData = {
        ...prevReportData,
        valueSuffix: valueSuffix
      }
      if (indicator === 'averagePercentage') {
        this._commonService.getReportDataNew(query).subscribe((res: any) => {
          if (res) {
            let rows = res;
            reportData = {
              ...prevReportData,
              averagePercentage: rows[0]?.[property]
            }
            resolve(reportData)
          }
        })
      }
      else if (indicator === 'differencePercentage') {
        this._commonService.getReportDataNew(query).subscribe((res: any) => {
          if (res) {
            let rows = res;
            reportData = {
              ...prevReportData,
              differencePercentage: rows[0]?.[property]
            }
            resolve(reportData)
          }
        })
      }
    });
  }

  getBarChartReportData(query, options, filters, defaultLevel): Promise<any> {
    return new Promise((resolve, reject) => {
      let { barChart: { yAxis, xAxis, isMultibar, metricLabel, metricValue } } = options;
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        if (isMultibar) {
          rows = this.multibarGroupBy(rows, xAxis.label, metricLabel, metricValue);
        }
        let reportData = {
          values: rows
        }
        let config = getChartJSConfig({
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
                  if (isMultibar && tooltipItem.datasetIndex === 0) {
                    xAxis.metrics.forEach((metric: any) => {
                      multistringText.push(`${metric.label}: ${formatNumberForReport(rows[tooltipItem.index][metric.value])}`);
                    });
                  }
                  multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value}%`)
                  return multistringText;
                }
              }
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: yAxis.title
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
        resolve({ reportData: reportData, config: config })
      });
    });
  }

  getMapReportData(query: any, options: any, filters: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let reportData;
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        rows = [
          {
            "latitude": 23.3441,
            "longitude": 85.3096,
            "ptr": 19.88,
            "% schools having toilet": 99.8,
            "% schools having drinking water": 100,
            "% schools having electricity": 99.6,
            "district_code": 364
          },
          {
            "latitude": 24.2065,
            "longitude": 84.8718,
            "ptr": 27.01,
            "% schools having toilet": 100,
            "% schools having drinking water": 100,
            "% schools having electricity": 96.5,
            "district_code": 347
          },
          {
            "latitude": 24.1913,
            "longitude": 86.2996,
            "ptr": 24.69,
            "% schools having toilet": 99.7,
            "% schools having drinking water": 100,
            "% schools having electricity": 88.8,
            "district_code": 349
          },
          {
            "latitude": 23.9505,
            "longitude": 86.817,
            "ptr": 20.94,
            "% schools having toilet": 98.8,
            "% schools having drinking water": 98.1,
            "% schools having electricity": 92.4,
            "district_code": 363
          },
          {
            "latitude": 23.6363,
            "longitude": 85.5124,
            "ptr": 28.46,
            "% schools having toilet": 100,
            "% schools having drinking water": 100,
            "% schools having electricity": 99.9,
            "district_code": 361
          }
         ]
        let { map: { indicator, indicatorType, legend, metricFilterNeeded, tooltipMetrics } } = options ?? {};
        let metricFilter;
        if(metricFilterNeeded) {
          metricFilter = filters.filter((filter: any) => {
            return filter.columnName === 'metric'
          })[0]
        } 
        reportData = {
          data: rows.map(row => {
            row = {
              ...row,
              Latitude: row['latitude'],
              Longitude: row['longitude'],
              indicator: metricFilter ? Number(row[metricFilter.value]) : Number(row[indicator]),
              tooltip: this._wrapperService.constructTooltip(tooltipMetrics, row, metricFilter ? metricFilter.value : indicator)
            };
  
            return row;
          }),
          options: {
            reportIndicatorType: indicatorType,
            legend,
            selectedMetric: metricFilter ? metricFilter.options?.filter(option => option.value === metricFilter.value)[0]?.label : indicator
          }
        }
        resolve(reportData)
      },
      (error) => {
        reportData = undefined
        resolve(reportData)
      }
      );
    })
  }

  multibarGroupBy(data: any, groupByLabel: string, metricLabel: string, metricValue: string) {
    let result = _.chain(data).groupBy(groupByLabel).map((objs, key) => {
      data = {
        [groupByLabel]: key
      }
      objs?.forEach((obj: any) => {
        data = {
          ...data,
          [obj[metricLabel]]: obj[metricValue]
        }
      });
      return data;
    }).value()
    return result;
  }
}
