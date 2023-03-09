import { Injectable } from '@angular/core';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';
import { getBarDatasetConfig, getChartJSConfig } from '../config/ChartjsConfig';
import { CommonService } from './common/common.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _commonService: CommonService) { }

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
