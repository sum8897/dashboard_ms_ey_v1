import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { DataService } from 'src/app/core/services/data.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseFilterToQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { CriteriaService } from 'src/app/core/services/criteria.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { startCase } from 'lodash';
import { config } from 'src/app/views/teacher-attendance/config/teacher_attendance_config';
import { TeacherSummaryTabComponent } from '../../teacher-summary-tab.component';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-teacher-average-table',
  templateUrl: './teacher-average-table.component.html',
  styleUrls: ['./teacher-average-table.component.scss']
})
export class TeacherAverageTableComponent implements OnInit, OnDestroy {
  reportName: string = 'teacher_average_table';
  filters: any = [];
  levels: any;
  tableReportData: any;
  backUpData: any = [];
  criteriaApplied: boolean = false;
  bigNumberReportData: any = {
    reportName: "Average Teachers Present"
  };
  minDate: any;
  maxDate: any;
  compareDateRange: any = 7;
  // level = environment.config === 'NVSK' ? 'VSK' : 'district';
  filterIndex: any;
  rbacDetails: any;
  title = '% Average Teachers Present';
  drillDownDetails: any;
  drillDownLevel: any;
  drillDownSubscription: any;
  filterValues:any;
  filterneed:any;
  metricFilter:any;
  selectedYear: any;
  selectedMonth: any;
  config: any;
  downloadedFileName: any = '';
  showCallButton = false;
  showDownloadButton = true;


  @Output() bigNumberReport = new EventEmitter<any>();
  @Output() exportDates = new EventEmitter<any>();
  @Input() startDate: any;
  @Input() endDate: any;
  @Output() exportReportData = new EventEmitter<any>();

  constructor(
    private readonly _commonService: CommonService,
    private csv: TeacherSummaryTabComponent,
    private readonly _wrapperService: WrapperService,
    private _rbacService: RbacService,
    private readonly _reportDrilldownService: ReportDrilldownService,
    private readonly _criteriaService: CriteriaService,
    private spinner: NgxSpinnerService,
    private readonly _dataService: DataService,
    private readonly _authenticationService: AuthenticationService
  ) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    });


  }

  ngOnInit(): void {
    // this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(async (data) => {
    //   if (data && data.hierarchyLevel) {
    //     this.drillDownLevel = data.hierarchyLevel
    //     // this.drilldownData(data);
    //     this._criteriaService.emit('reset')
    //     this.criteriaApplied = false;

    //     let result: any = await this._reportDrilldownService.drilldown(data, this.rbacDetails, config[this.reportName], this.startDate, this.endDate, this.drillDownDetails)
    //     this.drillDownDetails = result?.drillDownDetails
    //     this.tableReportData = result?.reportData
    //     if (this.tableReportData?.data?.length > 0) {
    //       let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
    //       this.csv.csvDownload(reportsData)
    //     }
    //   }
    // })
    this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(async (data) => {
      if (data && data.hierarchyLevel) {
        this.drillDownLevel = data.hierarchyLevel
        // this.drilldownData(data);
        this._criteriaService.emit('reset')
        this.criteriaApplied = false;

        let result: any = await this._reportDrilldownService.drilldown(data, this.rbacDetails, config[this.reportName], this.startDate, this.endDate, this.drillDownDetails,this.filterValues, this.metricFilter,this.filterneed)
        this.drillDownDetails = result?.drillDownDetails
        this.tableReportData = result?.reportData
        if (this.tableReportData?.data?.length > 0) {
          let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
          console.log(this.tableReportData?.data[0])
          const schoolNameKey = Object.keys(this.tableReportData?.data[0]).find(key => key === "school_name");
             this.downloadedFileName=schoolNameKey;
          console.log(schoolNameKey);
          if (schoolNameKey == 'school_name') {
            // this.showDownloadButton = true;
            this.showCallButton = true;
          }
          else {
            // this.showDownloadButton = false;
            this.showCallButton = false;
          }
          this.csv.csvDownload(reportsData)
        }
      }
    })

    this._criteriaService.criteriaObject.subscribe(async (data) => {
      if (data && data?.linkedReports?.includes(this.reportName)) {
        if (!this.criteriaApplied) {
          this.backUpData = this.tableReportData?.data
        }
        this.criteriaApplied = true
        this.tableReportData = this._criteriaService.applyCriteria(data, this.backUpData, this.tableReportData)
        // await this.applyCriteria(data);
        // let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
        // this.csv.csvDownload(reportsData)
      }
    })
    // this.getReportData();
  }

 
  //   this.startDate = startDate;
  //   this.endDate = endDate;
  //   this._criteriaService.emit('reset')
  //   this.criteriaApplied = false
  //   if (this.drillDownDetails !== undefined) {
  //     let result: any = await this._reportDrilldownService.drilldown({ hierarchyLevel: this.drillDownLevel }, this.rbacDetails, config[this.reportName], this.startDate, this.endDate, this.drillDownDetails)
  //     this.drillDownDetails = result?.drillDownDetails
  //     this.tableReportData = result?.reportData
  //     if (this.tableReportData?.data?.length > 0) {
  //       let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
  //       this.csv.csvDownload(reportsData)
  //     }
  //   }
  //   else {
  //     let reportConfig = config;

  //     let { timeSeriesQueries, queries, levels, label, defaultLevel, filters, options } = reportConfig[this.reportName];
  //     let onLoadQuery;
  //     if (this.rbacDetails?.role) {
  //       filters.every((filter: any) => {
  //         if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
  //           queries = { ...filter?.actions?.queries }
  //           timeSeriesQueries = { ...filter?.timeSeriesQueries }
  //           Object.keys(queries).forEach((key) => {
  //             queries[key] = this.parseRbacFilter(queries[key])
  //             timeSeriesQueries[key] = this.parseRbacFilter(timeSeriesQueries[key])
  //           });
  //           return false
  //         }
  //         return true
  //       })
  //     } else {
  //       this._wrapperService.constructFilters(this.filters, filters);
  //     }

  //     Object.keys(queries).forEach((key: any) => {
  //       if (key.toLowerCase().includes('comparison')) {
  //         let endDate = new Date();
  //         let days = endDate.getDate() - this.compareDateRange;
  //         let startDate = new Date();
  //         startDate.setDate(days)
  //         onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
  //       }
  //       else if (this.startDate !== undefined && this.endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
  //         onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[key], this.startDate, this.endDate)
  //       }
  //       else {
  //         onLoadQuery = queries[key]
  //       }
  //       let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

  //       console.log('query:',query)
  //       if (query && key === 'table') {
  //         this.getTableReportData(query, options);
  //       }
  //     })
  //   }
  // }

  //function for filters
  async getReportData(values: any,startDate: any, endDate : any): Promise<void> {

    
    let { filterValues, timeSeriesValues, filterneed } = values ?? { filterValues: [], timeSeriesValues: [], filterneed:[] };
    if (filterValues === undefined) {
      filterValues = []
    }
    this.metricFilter = [...filterValues].filter((filter: any) => {
      return filter.filterType === 'metric'
    })
    this.filterValues = [...filterValues].filter((filter: any) => {
      return filter.filterType !== 'metric'
    })
    this.filterneed=filterneed;
    console.log('lo-wise filterneed',this.filterneed)
    // console.log("reportData:",this.drillDownDetails)
     if (this.drillDownDetails !== undefined) {
      let result: any = await this._reportDrilldownService.drilldown({ hierarchyLevel: this.drillDownLevel }, this.rbacDetails, config[this.reportName], startDate, endDate, this.drillDownDetails, this.filterValues,this.metricFilter,this.filterneed)
      this.drillDownDetails = result?.drillDownDetails
      this.tableReportData = result?.reportData
      
    }
    else {
      // console.log("hello click===================", this.drillDownDetails)
      this.drillDownLevel = undefined;
      let { filterValues, timeSeriesValues } = values ?? { filterValues: [], timeSeriesValues: [] };
      if (filterValues === undefined) {
        filterValues = []
      }
    
      // this.filterValues = filterValues
      this.startDate = startDate;
      this.endDate = endDate;
      let reportConfig = config

      let { timeSeriesQueries, queries, levels, defaultLevel, filters, options } = reportConfig[this.reportName];
      let onLoadQuery;
      let currentLevel;

      if (this.rbacDetails?.role) {
        filters.every((filter: any) => {
          if (Number(this.rbacDetails?.role) === Number(filter.hierarchyLevel)) {
            queries = { ...filter?.actions?.queries }
            Object.keys(queries).forEach((key) => {
              queries[key] = parseRbacFilter(queries[key], this.rbacDetails)
            });
            return false
          }
          return true
        })
      }

      Object.keys(queries).forEach(async (key: any) => {
        if (this.startDate === undefined && this.endDate === undefined) {
          let endDate = new Date();
          let days = endDate.getDate() - this.compareDateRange;
          let startDate = new Date();
          startDate.setDate(days)
          
          onLoadQuery = parseTimeSeriesQuery(queries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
          console.log('237',this.startDate,this.endDate)
        }
        else if (this.startDate !== undefined && this.endDate !== undefined) {
          onLoadQuery = parseTimeSeriesQuery(queries[key], this.startDate, this.endDate)
          console.log('241')
        }

        let query = buildQuery(onLoadQuery, defaultLevel, this.levels, this.filters, this.startDate, this.endDate, key, this.compareDateRange);

        let metricFilter = [...filterValues].filter((filter: any) => {
          return filter.filterType === 'metric'
        })
       

        this.filterValues.forEach((filterParams: any) => {
          query = parseFilterToQuery(query, filterParams)
        });
        console.log(key,filterneed)
        console.log(query)
        if (query && key === 'table'&& filterneed) {
          this.tableReportData = await this._dataService.getTableReportData(query, options);
          if (this.tableReportData?.data?.length > 0) {
            let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
            this.exportReportData.emit(reportsData)
          }
        }
        else if (query && key === 'bigNumber') {
          this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'averagePercentage', this.tableReportData);
        }
        else if (query && key === 'bigNumberComparison') {
          this.tableReportData = await this._dataService.getBigNumberReportData(query, options, 'differencePercentage', this.tableReportData);
        }
        else if (query && key === 'barChart') {
          let { reportData, config } = await this._dataService.getBarChartReportData(query, options, filters, defaultLevel);
          this.tableReportData = reportData
          this.config = config;
          if (this.tableReportData?.values?.length > 0) {
            let reportsData = { reportData: this.tableReportData.values, reportType: 'dashletBar', reportName: this.title }
            this.exportReportData.emit(reportsData)
          }
        }
        
        else if (query && key === 'map' && filterneed) {
          this.tableReportData = await this._dataService.getMapReportData(query, options, metricFilter)
          
          if (this.tableReportData?.data?.length > 0) {
            let reportsData = { reportData: this.tableReportData.data, reportType: 'map', reportName: this.title }

            // console.log("report_dat:",reportsData,query)
            this.exportReportData.emit(reportsData)
          }
        }
        // else if (query && key=== 'map_without_filter' && !filterneed) {
        //   this.reportData = await await this._dataService.getMapReportData(query, options, metricFilter)
        //   if (this.reportData?.data?.length > 0) {
        //     let reportsData = { reportData: this.reportData.data, reportType: 'map_without_filter', reportName: this.title }
        //     this.exportReportData.emit(reportsData)
        //   }
        // }
        
      })
    }
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
                [col.property]: { value: col.type === 'number' ? Number(row[col.property]) : row[col.property] }
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
      };
      if (this.tableReportData?.data?.length > 0) {
        let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
        this.csv.csvDownload(reportsData)
      }
    });
  }

  handleDrillDownFilter(data: any) {
    console.log(data);
    console.log(this.tableReportData?.data);
    // this.downloadDataAsCSV(data);
    this.downloadDataAsPDF(this.tableReportData?.data);
    this.getFirstKeyValue(this.tableReportData?.data);

    // if (this.tableReportData?.data?.length > 0) {
    //   let reportsData = { reportData: this.tableReportData.data, reportType: 'table', reportName: this.title }
    //   console.log(reportsData);

    // }
  }
  getFirstKeyValue(obj: { [key: string]: { value: any } }): any {
    this.downloadedFileName = '';
    const keys = Object.keys(obj);
    if (keys.length > 0) {
      const firstKey = keys[0];
      // this.downloadedFileName = obj[firstKey].value;
      return obj[firstKey].value;
    }
    return null; // or throw an error, or handle it as needed
  }
  downloadDataAsCSV(data: any) {
    const csvData = this.convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('style', 'display: none');
    document.body.appendChild(a);
    a.href = url;
    a.download = 'data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  convertToCSV(data: any): string {
    // Convert data to an array if it's not already
    const array = Array.isArray(data) ? data : [data];
    let str = '';
    let row = '';

    // Get headers
    const headers = Object.keys(array[0]);
    row = headers.join(',') + '\r\n';
    str += row;

    // Get data rows
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let key of headers) {
        if (line !== '') line += ',';
        line += array[i][key]?.value || '';  // Access nested value
      }
      str += line + '\r\n';
    }
    return str;
  }
  downloadDataAsPDF(data: any) {
    const array = Array.isArray(data) ? data : [data];
    let tableContent = '<table><thead><tr>';

    // Get headers
    const headers = Object.keys(array[0]);
    headers.forEach(header => {
      tableContent += `<th>${header}</th>`;
    });
    tableContent += '</tr></thead><tbody>';

    // Get data rows
    array.forEach(item => {
      tableContent += '<tr>';
      headers.forEach(header => {
        tableContent += `<td>${item[header]?.value || ''}</td>`;
      });
      tableContent += '</tr>';
    });

    tableContent += '</tbody></table>';

    const content = `
      <html>
        <head>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          ${tableContent}
        </body>
      </html>
    `;

    this.createPDF(content);
  }

  createPDF(content: string) {
    console.log(content);
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = '-9999px';
    div.innerHTML = content;
    document.body.appendChild(div);

    html2canvas(div).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(this.title + this.downloadedFileName + '.pdf');
      document.body.removeChild(div);
    });
  }

  ngOnDestroy(): void {
    this.drillDownSubscription.unsubscribe()
  }
}
