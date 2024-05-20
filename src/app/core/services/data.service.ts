import { Injectable } from '@angular/core';
import { ChartJSConfig, getBarDatasetConfig, getChartJSConfig, getScatterDatasetConfig } from '../config/ChartjsConfig';
import { CommonService } from './common/common.service';
import * as _ from 'lodash';
import { WrapperService } from './wrapper.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private spinner: NgxSpinnerService, private _commonService: CommonService, private _wrapperService: WrapperService) { }

  getTableReportData(query, options): Promise<any> {
    return new Promise((resolve, reject) => {
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        this.spinner.show()
        let rows = res;
        let { table: { columns, groupByNeeded, metricLabelProp, metricValueProp, fillEmptyCell } } = options;
        let newColumns: any = [];
        if (groupByNeeded) {
          let { result, newColumnsProps } = this.tableGroupBy(rows, columns.filter((column: any) => !column?.groupByNeeded || column?.groupByNeeded === undefined).map((column) => column?.property), metricLabelProp, metricValueProp)
          rows = result
          let transposeColumn = columns.filter(col => col.property === metricLabelProp)[0]
          newColumnsProps.forEach((newColProp) => {
            newColumns.push({
              ...transposeColumn,
              property: newColProp,
              name: newColProp
            })
          })
          columns = columns.concat(newColumns)
        }
        let newRows = rows.map(row => {
          columns.forEach((col: any) => {
            let cellValue = row[col.property];
            if (fillEmptyCell && (cellValue === null || cellValue === undefined)) {
              cellValue = fillEmptyCell;
            }
            if (cellValue !== null && cellValue !== undefined) {
              row = {
                ...row,
                [col.property]: { value: cellValue }
              }
            }
          });
          return row;
        })
        let newCols = columns.filter(col => {
          if (newRows[0] && col.property in newRows[0] && col.property !== metricLabelProp) {
            return col;
          }
        })
        let colProps = newCols.map((obj) => {
          return obj.property
        })
        newRows.forEach((obj: any) => {
          Object.keys(obj).forEach((key) => {
            if (!colProps.includes(key) && !key.includes('id')) {
              delete obj[key]
            }
          })
        })
        let reportData = {
          data: newRows,
          columns: newCols
        }
        this.spinner.hide()
        resolve(reportData);
      })
    });
  }


  getBigNumberReportData(query: string, options: any, indicator: string, prevReportData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.spinner.show();
      let { bigNumber } = options ?? {};
      let { valueSuffix, property, title } = bigNumber ?? {};
      let reportData = {
        ...prevReportData,
        valueSuffix: valueSuffix,
        reportName: title
      }
      if (indicator === 'averagePercentage') {
        this._commonService.getReportDataNew(query).subscribe((res: any) => {
          if (res) {
            let rows = res;
            reportData = {
              ...reportData,
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
              ...reportData,
              differencePercentage: rows[0]?.[property]
            }
            resolve(reportData)
          }
        })
      }
      this.spinner.hide()
    });
  }
  //pie chart func
  // getPieChartReportData(query, options, filters, currentLevel): Promise<any> {
  //   return new Promise((resolve, reject) => {
  
  //     this.spinner.show();
  //     let {
  //       barChart: { 
  //         yAxis, xAxis, defaultPageSize, isCorrelation, type, isMultibar, MultibarGroupByNeeded, valueSuffix, metricLabelProp, metricValueProp 
  //       } 
  //     } = options;
      
  //     this._commonService.getReportDataNew(query).subscribe((res: any) => {
  //       let rows = res;
  
  //       if (MultibarGroupByNeeded) {
  //         rows = this.multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
  //       }
  //       let reportData = {
  //         values: rows
  //       }
        
  //       let config = getChartJSConfig({
  //         labelExpr: xAxis.value,
  //         datasets: this.getDatasets(options.barChart, filters), // Adjust to pieChart

  //         options: {
  //           height: '150',
  //           tooltips: {
  //             callbacks: {
  //               label: (tooltipItem, data) => {
  //                 let multistringText = [];
  //                 data.datasets.forEach((dataset: any, index: any) => {
  //                   if (index === tooltipItem.datasetIndex) {
  //                     multistringText.push(`${dataset.label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
  //                   }
  //                 })
  //                 return multistringText;
  //               }
  //             }
  //           },
  //           // scales: { // No scales for a pie chart
              
  //           // },
          
  //         }
  //       });
        
  //       // Change bar color to green
  //       config.datasets.forEach((dataset: any) => {
  //         dataset.backgroundColor = 'rgba(0,0,0,0.1)';
  //       });
        
  //       this.spinner.hide();
  //       resolve({ reportData: reportData, config: config })
  //     });
  //   });
  // }


  //created new func by himanshu
  getLineChartReportData(query, options, filters, currentLevel): Promise<any> {
    return new Promise((resolve, reject) => {
  
      this.spinner.show();
      let {
         barChart: { 
          yAxis, xAxis, defaultPageSize, isCorrelation, type, isMultibar, MultibarGroupByNeeded, valueSuffix, metricLabelProp, metricValueProp 
        } 
      } = options;
      
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
  
        if (MultibarGroupByNeeded) {
          rows = this.multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
        }
        let reportData = {
          values: rows
        }
        
        let config = getChartJSConfig({
          labelExpr: xAxis.value,
          datasets: this.getDatasets(options.barChart, filters),

          options: {
          
            // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 15 + 150).toString(),
            // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 6).toString(),
            height: '200',

            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  let multistringText = [];
                  // if (isMultibar) {
                    data.datasets.forEach((dataset: any, index: any) => {
                      if (index === tooltipItem.datasetIndex) {
                        multistringText.push(`${dataset.label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                      }
                    })
                  // }
                  // else {
                  //   multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                  // }
                  return multistringText;
                }
              }
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: Array.isArray(yAxis.title) ? yAxis.title[currentLevel] : yAxis.title
                },
                ticks: {
                  callback: function (value, index, values) {
                    if (yAxis?.limitCharacters && value.length > Number(yAxis?.limitCharacters)) {
                      let newValue = value?.substring(0, Number(yAxis?.limitCharacters)) + '...'
                      return newValue
                    }
                    else {
                      return value
                    }
                  }
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: xAxis.title
                },
                ticks: {
                  callback: function (value, index, values) {
                    if (type !== 'horizontal') {
                      let newValue = value?.split('_').map((word: any) => word[0] + word.substring(1)).join(' ')
                      if (screen.width <= 768) {
                        return newValue.substr(0, 8) + '...';
                      } else {
                        return newValue;
                      }
                    }
                    else {
                      return value
                    }
                  }
                }
              }]
            },
           // Set tension to 0 for pinpoint appearance
           elements: {
            line: {
                tension: 0, // Set tension to 0 for pinpoint appearance
                // borderColor: '#0b1d78' 
            }
        }
          }
        });
         // Change bar color to green
      //    config.datasets.forEach((dataset: any) => {
      //     dataset.backgroundColor = 'rgba(0,0,0,0.1)';
      // });
      config.datasets.forEach((dataset: any) => {
        dataset.backgroundColor = '#008ac5';
    });
        this.spinner.hide();
        resolve({ reportData: reportData, config: config })
      });
    });
  }

  //vertical bar
  getBarChartReportData(query, options, filters, currentLevel): Promise<any> {
    return new Promise((resolve, reject) => {
  
      this.spinner.show();
      let {
         barChart: { 
          yAxis, xAxis, defaultPageSize, isCorrelation, type, isMultibar, MultibarGroupByNeeded, valueSuffix, metricLabelProp, metricValueProp 
        } 
      } = options;
      
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
  
        if (MultibarGroupByNeeded) {
          rows = this.multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
        }
        let reportData = {
          values: rows
        }
        
        let config = getChartJSConfig({
          labelExpr: xAxis.value,
          datasets: this.getDatasets(options.barChart, filters),

          options: {
          
            // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 15 + 150).toString(),
            // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 6).toString(),
            height: '200',

            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  let multistringText = [];
                  // if (isMultibar) {
                    data.datasets.forEach((dataset: any, index: any) => {
                      if (index === tooltipItem.datasetIndex) {
                        multistringText.push(`${dataset.label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                      }
                    })
                  // }
                  // else {
                  //   multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                  // }
                  return multistringText;
                }
              }
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: Array.isArray(yAxis.title) ? yAxis.title[currentLevel] : yAxis.title
                },
                ticks: {
                  callback: function (value, index, values) {
                    if (yAxis?.limitCharacters && value.length > Number(yAxis?.limitCharacters)) {
                      let newValue = value?.substring(0, Number(yAxis?.limitCharacters)) + '...'
                      return newValue
                    }
                    else {
                      return value
                    }
                  }
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: xAxis.title
                },
                ticks: {
                  callback: function (value, index, values) {
                    if (type !== 'horizontal') {
                      let newValue = value?.split('_').map((word: any) => word[0] + word.substring(1)).join(' ')
                      if (screen.width <= 768) {
                        return newValue.substr(0, 8) + '...';
                      } else {
                        return newValue;
                      }
                    }
                    else {
                      return value
                    }
                  }
                }
              }]
            },
            
          
          }
        });
         // Change bar color to green
      //    config.datasets.forEach((dataset: any) => {
      //     dataset.backgroundColor = 'rgba(0,0,0,0.1)';
      // });
        this.spinner.hide();
        resolve({ reportData: reportData, config: config })
      });
    });
  }

  //vertical bar with small div bar graph
  // getSmallBarChartReportData(query, options, filters, currentLevel): Promise<any> {
  //   return new Promise((resolve, reject) => {
  
  //     this.spinner.show();
  //     let {
  //        barChart: { 
  //         yAxis, xAxis, defaultPageSize, isCorrelation, type, isMultibar, MultibarGroupByNeeded, valueSuffix, metricLabelProp, metricValueProp 
  //       } 
  //     } = options;
      
  //     this._commonService.getReportDataNew(query).subscribe((res: any) => {
  //       let rows = res;
  
  //       if (MultibarGroupByNeeded) {
  //         rows = this.multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
  //       }
  //       let reportData = {
  //         values: rows
  //       }
        
  //       let config = getChartJSConfig({
  //         labelExpr: xAxis.value,
  //         datasets: this.getDatasets(options.barChart, filters),

  //         options: {
          
  //           height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 15 + 150).toString(),
  //           // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 6).toString(),
  //           // height: '150',

  //           tooltips: {
  //             callbacks: {
  //               label: (tooltipItem, data) => {
  //                 let multistringText = [];
  //                 // if (isMultibar) {
  //                   data.datasets.forEach((dataset: any, index: any) => {
  //                     if (index === tooltipItem.datasetIndex) {
  //                       multistringText.push(`${dataset.label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
  //                     }
  //                   })
  //                 // }
  //                 // else {
  //                 //   multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
  //                 // }
  //                 return multistringText;
  //               }
  //             }
  //           },
  //           scales: {
  //             yAxes: [{
  //               scaleLabel: {
  //                 display: true,
  //                 labelString: Array.isArray(yAxis.title) ? yAxis.title[currentLevel] : yAxis.title
  //               },
  //               ticks: {
  //                 callback: function (value, index, values) {
  //                   if (yAxis?.limitCharacters && value.length > Number(yAxis?.limitCharacters)) {
  //                     let newValue = value?.substring(0, Number(yAxis?.limitCharacters)) + '...'
  //                     return newValue
  //                   }
  //                   else {
  //                     return value
  //                   }
  //                 }
  //               }
  //             }],
  //             xAxes: [{
  //               scaleLabel: {
  //                 display: true,
  //                 labelString: xAxis.title
  //               },
  //               ticks: {
  //                 callback: function (value, index, values) {
  //                   if (type !== 'horizontal') {
  //                     let newValue = value?.split('_').map((word: any) => word[0] + word.substring(1)).join(' ')
  //                     if (screen.width <= 768) {
  //                       return newValue.substr(0, 8) + '...';
  //                     } else {
  //                       return newValue;
  //                     }
  //                   }
  //                   else {
  //                     return value
  //                   }
  //                 }
  //               }
  //             }]
  //           },
            
          
  //         }
  //       });
  //        // Change bar color to green
  //     //    config.datasets.forEach((dataset: any) => {
  //     //     dataset.backgroundColor = 'rgba(0,0,0,0.1)';
  //     // });
  //       this.spinner.hide();
  //       resolve({ reportData: reportData, config: config })
  //     });
  //   });
  // }


  //horizontal bar
  getHorizintalBarChartReportData(query, options, filters, currentLevel): Promise<any> {
  return new Promise((resolve, reject) => {

    this.spinner.show();
    let {
      barChart: { 
        yAxis, xAxis, defaultPageSize, isCorrelation, type, isMultibar, MultibarGroupByNeeded, valueSuffix, metricLabelProp, metricValueProp 
      } 
    } = options;
    
    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let rows = res;

      if (MultibarGroupByNeeded) {
        rows = this.multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
      }
      let reportData = {
        values: rows
      }
      
      let config = getChartJSConfig({
        labelExpr: xAxis.value,
        datasets: this.getDatasets(options.barChart, filters),

        options: {
        
          // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 15 + 150).toString(),
          // height: ((rows.length > defaultPageSize ? defaultPageSize : rows.length) * 6).toString(),
          height: '150',

          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                let multistringText = [];
                // if (isMultibar) {
                  data.datasets.forEach((dataset: any, index: any) => {
                    if (index === tooltipItem.datasetIndex) {
                      multistringText.push(`${dataset.label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                    }
                  })
                // }
                // else {
                //   multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                // }
                return multistringText;
              }
            }
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: Array.isArray(xAxis.title) ? xAxis.title[currentLevel] : xAxis.title
              },
              ticks: {
                callback: function (value, index, values) {
                  if (xAxis?.limitCharacters && value.length > Number(xAxis?.limitCharacters)) {
                    let newValue = value?.substring(0, Number(xAxis?.limitCharacters)) + '...'
                    return newValue
                  }
                  else {
                    return value
                  }
                }
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: yAxis.title
              },
              ticks: {
                callback: function (value, index, values) {
                  if (type !== 'horizontal') {
                    let newValue = value?.split('_').map((word: any) => word[0] + word.substring(1)).join(' ')
                    if (screen.width <= 768) {
                      return newValue.substr(0, 8) + '...';
                    } else {
                      return newValue;
                    }
                  }
                  else {
                    return value
                  }
                }
              }
            }]
          },
          
        
        }
      });

      // Change bar color to green
      // config.datasets.forEach((dataset: any) => {
      //   dataset.backgroundColor = 'rgba(0,0,0,0.1)';
      // });
      this.spinner.hide();
      resolve({ reportData: reportData, config: config })
    });
  });
}

  extraLine(data:any,config:any,param:any)
  {
    console.log("extraLine ===== ", data);
    const minValue = Math.min(...data.values.map((reportData:any) => reportData[param]));
    const minObject = {
            type: 'line',
            metricLabelProp: 'Min',
            label: 'Min',
            data: Array(data.values.length).fill(minValue),
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 2,
            fill: false
    }
          // To get the maximum value
    const maxValue = Math.max(...data.values.map((reportData:any) => reportData[param]));
    const maxObject = {
      type: 'line',
      metricLabelProp: 'Max',
      label: 'Max',
      data: Array(data.values.length).fill(maxValue),
      borderColor: 'rgba(0, 225, 0, 1)',
      borderWidth: 2,
      fill: false
    }
          // Calculate the average value
          let total = 0;
    data.values.forEach(( reportData:any) => total = total + parseFloat(reportData[param]));
    console.log('total',total)
    console.log('length',data.values.length)
    // const averageValue = total / data.values.length;
    const averageValue = (total / data.values.length).toFixed(2);
    const avgObject = {
      type: 'line',
      metricLabelProp: "Average",
      label: 'Average',
      data: Array(data.values.length).fill(averageValue),
      borderColor: 'rgba(0, 0, 255, 1)',
      borderWidth: 2,
      fill: false
    }
    config.datasets.push(avgObject);
    config.datasets.push(maxObject);
    config.datasets.push(minObject);
    console.log("extraLine ===== config ", config);
    console.log("extraLine ===== minValue ", minValue);
    console.log("extraLine ===== maxValue ", maxValue);
    console.log("extraLine ===== averageValue ", averageValue);

  }
  //trendline
  trendLine(data: any, config: any, param: string, label:string) {
    console.log("trendline extra ===== ", data);
    
    const lineData = data.values.map((reportData: any) => reportData[param]);

    const lineObject = {
        type: 'line',
        metricLabelProp: label, // Customize the label as needed
        label: label, // Customize the label as needed
        data: lineData,
        borderColor: 'rgba(0, 204, 0, 1)', // Customize the border color as needed
        borderWidth: 2, // Customize the border width as needed
        fill: false
    };

    config.datasets.push(lineObject);

    console.log("trendline extra c=====config ", config);
}

//stackbar
stackBar(data: any, config: any, param: string,label:string,backgroundColor:any,barPercentage:any) {
  console.log("trendLine ===== ", data);
  
  const barData = data.values.map((reportData: any) => reportData[param]);

  const barObject = {
      type: 'bar',
      metricLabelProp: label, // Customize the label as needed
      label: label, // Customize the label as needed
      data: barData,
      backgroundColor: backgroundColor, // Customize the bar color as needed
      borderWidth: 1, // Customize the border width as needed
      borderColor: 'rgba(0, 0, 255, 1)', // Customize the border color as needed
      // stack: 'Stack 1' // Specify the stack name
      barPercentage: 0.8, // Adjust the width of individual bars (optional, default is 0.9)
      // barPercentage: barPercentage, // Adjust the width of individual bars (optional, default is 0.9)
      categoryPercentage: barPercentage,
  };

  config.datasets.push(barObject);

  console.log("trendLine ===== config ", config);
}

  getStackedBarChartReportData(query, options, filters, defaultLevel): Promise<any> {
    return new Promise((resolve, reject) => {
      this.spinner.show();
      let { stackedBarChart: { yAxis, xAxis, isCorrelation, type, isMultibar, MultibarGroupByNeeded, valueSuffix, metricLabelProp, metricValueProp } } = options;
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        if (MultibarGroupByNeeded) {
          rows = this.multibarGroupBy(rows, xAxis.label, metricLabelProp, metricValueProp);
        }
        let reportData = {
          values: rows
        }
        let config = getChartJSConfig({
          labelExpr: yAxis.value,
          datasets: this.getDatasets(options.stackedBarChart, filters),

          options: {
            height: (rows.length * 15 + 150).toString(),
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  let multistringText = [];
                  if (isMultibar) {
                    data.datasets.forEach((dataset: any, index: any) => {
                      if (index === tooltipItem.datasetIndex) {
                        multistringText.push(`${dataset.label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                      }
                    })
                  }
                  else {
                    multistringText.push(`${data.datasets[0].label} : ${tooltipItem.value} ${valueSuffix !== undefined ? valueSuffix : ''}`)
                  }
                  return multistringText;
                }
              }
            },
            scales: {
              yAxes: [{
                stacked: true,
                scaleLabel: {
                  display: true,
                  labelString: yAxis.title
                }
              }],
              xAxes: [{
                stacked: true,
                scaleLabel: {
                  display: true,
                  labelString: xAxis.title
                }
              }]
            }
          }
        });
        this.spinner.hide();
        resolve({ reportData: reportData, config: config })
      });
    });
  }

  getDatasets(barChartOptions: any, filters: any) {
    let { xAxis, isCorrelation, type, isMultibar, metricLabelProp, metricValueProp } = barChartOptions;
    if (isCorrelation) {
      return getBarDatasetConfig(
        filters.map((filter: any) => {
          return {
            dataExpr: filter.value, label: xAxis?.metrics?.filter((metric: any) => {
              return metric.value === filter.value
            })[0].label
          }
        })
      )
    }
    else if (isMultibar) {
      return getBarDatasetConfig(
        xAxis?.metrics.map((metric: any) => {
          return {
            dataExpr: metric.value,
            label: metric.label
          }
        }),
        type,
        false,
        ChartJSConfig.stackedBar
      )
    }
    else {
      return getBarDatasetConfig([{
        dataExpr: metricValueProp, label: metricLabelProp
      }])
    }
  }
  getOldMapReportData(query: any, options: any, filters: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let reportData;
      this.spinner.show();
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        let { map: { indicator, indicatorType, drillDownConfig, legend, metricFilterNeeded, tooltipMetrics, metricLabelProp, metricValueProp, groupByColumn } } = options ?? {};
        let metricFilter;
        if (metricFilterNeeded) {
          metricFilter = filters.filter((filter: any) => {
            return filter.filterType === 'metric'
          })[0]
          rows = this.mapGroupBy(rows, groupByColumn, metricLabelProp, metricValueProp, tooltipMetrics, metricFilter.value)
        }

        reportData = {
          data: rows.map(row => {
            row = {
              ...row,
              Latitude: row['latitude'],
              Longitude: row['longitude'],
              indicator: metricFilter ? isNaN(row[metricFilter.value]) ? row[metricFilter.value] : Number(row[metricFilter.value]) : isNaN(row[indicator]) ? row[indicator] : Number(row[indicator]),
              tooltip: row.tooltip ? row.tooltip : this._wrapperService.constructTooltip(tooltipMetrics, row, metricFilter ? metricFilter.value : indicator)
            };

            return row;
          }),
          options: {
            drillDownConfig: drillDownConfig,
            reportIndicatorType: indicatorType,
            legend,
            selectedMetric: metricFilter ? metricFilter.options?.filter(option => option.value === metricFilter.value)[0]?.label : undefined
          }
        }
        this.spinner.hide();
        resolve(reportData)
      },
        (error) => {
          reportData = undefined
          this.spinner.hide();
          resolve(reportData)
        }
      );
    })
  }
  
  getMapReportData(query: any, options: any, filters: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let reportData;
      this.spinner.show();
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        let { map: { indicator, indicatorType,totalOfPercentage, legend, metricFilterNeeded, tooltipMetrics, metricLabelProp, metricValueProp, groupByColumn } } = options ?? {};
        let metricFilter;
        // console.log(tooltipMetrics, metricFilter.options?.filter(option => option.value === metricFilter.value)[0]?.label);
        if (metricFilterNeeded) {
          metricFilter = filters?.filter((filter: any) => {
            return filter.filterType === 'metric'
          })[0]
          // rows = this.mapGroupBy(rows, groupByColumn, metricLabelProp, metricValueProp, tooltipMetrics, metricFilter.value)
        }

      
 
        reportData = {
          data: rows.map(row => {
            row = {
              ...row,
              Latitude: row['latitude'],
              Longitude: row['longitude'],
              indicator: indicatorType && indicatorType==='percent'? Number((metricFilter ? row[metricFilter.value]:row[indicator])/(totalOfPercentage?row[totalOfPercentage]:1)*100) : metricFilter ? isNaN(row[metricFilter.value]) ? row[metricFilter.value] : Number(row[metricFilter.value]) : isNaN(row[indicator]) ? row[indicator] : Number(row[indicator]),
              tooltip: row.tooltip ? row.tooltip : this._wrapperService.constructTooltip(tooltipMetrics, row, metricFilter ? metricFilter.value : indicator)
            };
 
            return row;
          }),
          
          options: {
            reportIndicatorType: indicatorType,
            legend, 
            legendLabel:tooltipMetrics && metricFilter ? tooltipMetrics?.filter(item=> item.value === (metricFilter.options?.filter(option => option.value === metricFilter.value)[0]?.label))[0].valuePrefix:undefined,
            selectedMetric: metricFilter ? metricFilter.options?.filter(option => option.value === metricFilter.value)[0]?.label : undefined,
            reporttotalOfPercentage:totalOfPercentage ? totalOfPercentage: undefined
          }
        }
        this.spinner.hide();
        resolve(reportData)
      },
        (error) => {
          reportData = undefined
          this.spinner.hide();
          resolve(reportData)
        }
      );
    })
  }
  getScatterChartReportData(query: any, options: any, axisFilters: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.spinner.show();
      let { barChart: { yAxis, xAxis, groupByNeeded, groupByLabel, tooltipMetrics, valueSuffix, metricLabelProp, metricValueProp } } = options;
      this._commonService.getReportDataNew(query).subscribe((res: any) => {
        let rows = res;
        if (groupByNeeded) {
          rows = this.scatterChartGroupBy(rows, groupByLabel, metricLabelProp, metricValueProp, axisFilters);
        }
        let reportData = {
          values: rows
        }

        let tooltipObject

        if (tooltipMetrics?.length > 0) {
          rows.forEach((row) => {
            let tooltip = this._wrapperService.constructTooltip(tooltipMetrics, row, axisFilters, 'scatter', valueSuffix)
            tooltipObject = {
              ...tooltipObject,
              [row?.[groupByLabel]?.trim()]: tooltip
            }
          });
        }

        let config = getChartJSConfig({
          labelExpr: 'random',
          datasets: getScatterDatasetConfig([{
            label: 'random',
            data: rows
          }]),
          options: {
            height: '300',
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: this.getAxisTitle(axisFilters[1])
                },
                ticks: {
                  min: 0,
                  max: 100
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: this.getAxisTitle(axisFilters[0])
                },
                ticks: {
                  min: 0,
                  max: 100
                }
              }]
            },
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  let tooltipData = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]?.[groupByLabel]
                  return tooltipObject[tooltipData]
                }
              }
            }
          }
        });
        this.spinner.hide();
        resolve({ reportData: reportData, config: config })
      });
    });
  }

  multibarGroupBy(data: any, groupByLabel: any, metricLabelProp: string, metricValueProp: string) {
    let result = _.chain(data).groupBy(groupByLabel).map((objs, key) => {
      data = {
        [groupByLabel]: key
      }
      objs?.forEach((obj: any) => {
        data = {
          ...data,
          [obj[metricLabelProp]]: obj[metricValueProp]
        }
      });
      return data;
    }).value()
    return result;
  }

  scatterChartGroupBy(data: any, groupByLabel: any, metricLabelProp: string, metricValueProp: string, axisFilters: any) {
    let result = _.chain(data).groupBy(groupByLabel).map((objs, key) => {
      data = {
        [groupByLabel]: key
      }
      objs?.forEach((obj: any) => {
        if (obj[metricLabelProp] === axisFilters[0].value) {
          data = {
            ...data,
            x: obj[metricValueProp]
          }
        }
        if (obj[metricLabelProp] === axisFilters[1].value) {
          data = {
            ...data,
            y: obj[metricValueProp]
          }
        }
      });
      return data;
    }).value()
    return result;
  }

  mapGroupBy(data: any, groupByLabel: any, metricLabelProp: string, metricValueProp: string, tooltipMetrics: any, metricFilterValue: any) {
    let result = _.chain(data).groupBy(groupByLabel).map((objs, key) => {
      data = {
        [groupByLabel]: key,
      }
      objs?.forEach((obj: any, index: any) => {
        let modifiedTooltipMetrics = tooltipMetrics.filter(metric => metricLabelProp === metric.value).map((metric: any) => {
          return {
            ...metric,
            valuePrefix: obj[metricLabelProp] + ': ',
            value: obj[metricLabelProp]
          }
        })
        data = {
          ...data,
          ...obj,
          // district_code: obj['district_id'] ? Number(obj['district_id']) : null,
          [obj[metricLabelProp]]: obj[metricValueProp]
        }
        if (index === 0) {
          data['tooltip'] = this._wrapperService.constructTooltip(tooltipMetrics.filter(metric => metricLabelProp !== metric.value), data, metricFilterValue)
        }
        data['tooltip'] += this._wrapperService.constructTooltip(modifiedTooltipMetrics, data, metricFilterValue)
      });
      return data;
    }).value()
    return result;
  }

  tableGroupBy(data: any, groupByLabel: any, metricLabelProp: string, metricValueProp: string) {
    let newColumnsProps = [];
    let result = _.chain(data).groupBy(Array.isArray(groupByLabel) ? (data) => {
      let combinedLabel: string = '';
      groupByLabel.forEach((label) => {
        combinedLabel += '_' + data[label]
      })
      return combinedLabel
    } : groupByLabel).map((objs, key) => {
      let tempData;
      objs?.forEach((obj: any) => {
        tempData = {
          ...tempData,
          ...obj,
          [obj[metricLabelProp]]: obj[metricValueProp] || "NA"
        }
        if (!newColumnsProps.includes(obj[metricLabelProp])) {
          newColumnsProps.push(obj[metricLabelProp])
        }
      });
      return tempData;
    }).value()
    return { result, newColumnsProps };
  }

  getAxisTitle(axisFilter: any): string {
    if (axisFilter) {
      let filterOption = axisFilter.options.find((option: any) => option.value === axisFilter.value)
      if (filterOption) {
        return filterOption.label.split('_').map(word => word.charAt(0) + word.slice(1)).join(' ');
      }
    }

    return "";
  }

}
