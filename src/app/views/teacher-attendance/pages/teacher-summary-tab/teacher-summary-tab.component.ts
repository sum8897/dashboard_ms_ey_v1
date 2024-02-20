import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { TeacherAverageTableComponent } from './reports/teacher-average-table/teacher-average-table.component';
import { config } from 'src/app/views/teacher-attendance/config/teacher_attendance_config';
import { TeacherSchoolTableComponent } from './reports/teacher-school-table/teacher-school-table.component';
import { TeacherBignumberComponent } from './reports/teacher-bignumber/teacher-bignumber.component';
import { TeacherBarchartComponent } from './reports/teacher-barchart/teacher-barchart.component';
import moment from 'moment';
import { TeacherTrendlineComponent } from './reports/teacher-trendline/teacher-trendline.component';


@Component({
  selector: 'app-teacher-summary-tab',
  templateUrl: './teacher-summary-tab.component.html',
  styleUrls: ['./teacher-summary-tab.component.scss']
})
export class TeacherSummaryTabComponent implements OnInit, OnDestroy {

  bigNumberReports: any = {};
  filters: any;
  maxDate: any;
  minDate: any;
  startDate: any;
  endDate: any
  reportsData: any[] = []
  rbacDetails: any;
  defaultSelectedDays: any = 7;
  drillDownLevel: any =1;
  hasTimeSeriesFilters: boolean = false;
hasCommonFilters: boolean = true;
  criteriaConfig: any = config.criteria_config;
  trendLineConfig = {
    options: {
      tooltips: { displayColors: false},
      legend: {display: false}
    }
  };
  filterValues:any;
  drillDownSubscription: any;
  tabLabel:any='Average Teachers Present';

  //added for full school report download
  // title = "Download School Report"
  schoolReportsData: any[] = [];
  pagereportName = "teachers_present"
  //
  @ViewChild('teacherBigNumber') teacherBigNumber: TeacherBignumberComponent;
  @ViewChild('teacherAverageTable') teacherAverageTable: TeacherAverageTableComponent;
  @ViewChild('teacherAverageSchool') teacherAverageSchool: TeacherSchoolTableComponent;
  @ViewChild('teacherBarchart') teacherBarchart: TeacherBarchartComponent;
  @ViewChild('teacherTrendchart') teacherTrendchart: TeacherTrendlineComponent;

  constructor(private _wrapperService: WrapperService,private readonly _commonService: CommonService, private _rbacService: RbacService, private readonly _reportDrilldownService: ReportDrilldownService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
     
      this.rbacDetails = rbacDetails;
      this.drillDownLevel =rbacDetails.role
    })
    this.drillDownSubscription = this._reportDrilldownService.drilldownData.subscribe(data => {
      if (data) {
        this.drillDownLevel = data.hierarchyLevel || this.rbacDetails?.role
        this.reportsData = []
        this.schoolReportsData = []
      }
    })
  }
 

  ngOnInit(): void {
    
    // this._reportDrilldownService.emit()
  }

  ngOnDestroy(): void {
    this._reportDrilldownService.emit('reset')
    this.drillDownSubscription.unsubscribe()
  }

  async ngAfterViewInit(): Promise<void> {
      if (this.hasCommonFilters) {
          this.filters = await this._wrapperService.constructCommonFilters(config.filters,this.tabLabel);
          console.log('line103- filters',this.filters)
          this.teacherAverageTable?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
          this.teacherBigNumber?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
          this.teacherBarchart?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
          this.teacherTrendchart?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
         
          }
      else if(this.hasCommonFilters===false){
          // this.loWisePerformance?.getReportData({filterneed: this.hasCommonFilters});
          
      }
    if (this.startDate === undefined && this.endDate === undefined ) {
      console.log('hello')
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days)
       this.startDate = moment(startDate).format('YYYY-MM-DD');
       this.endDate = moment(endDate).format('YYYY-MM-DD');
       console.log('datess',startDate,endDate)
      
      this.updateReportsData()
    }
  }


  checkReport(key: string, reportType: string): Boolean {
    let reportConfig = config;
    let flag = false;
    reportConfig[key]?.filters?.forEach((filter: any) => {
      if (Number(filter.hierarchyLevel) === Number(this.rbacDetails?.role) && Object.keys(filter?.actions?.queries).includes(reportType)) {
        flag = true
      }
    })
    return flag
  }

  csvDownload(csvData: any) {
    if (csvData) {
      this.reportsData = [];
      this.reportsData.push(csvData)
    }
  }
  

  updateReportsData( ): void {
   
    console.log('dttttttt',this.filters,this.startDate,this.endDate)

    this.teacherAverageTable?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

    this.teacherAverageSchool?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

    this.teacherBigNumber?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

    this.teacherBarchart?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

    this.teacherTrendchart?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

  

    }
     filtersUpdated(filters: any) {
      this.reportsData = [];
      this.filters = filters
      this.updateReportsData()
          }

  timeSeriesUpdated(event: any): void {
    if (event?.startDate !== null && event?.endDate !== null) {
          this.reportsData = []
          this.schoolReportsData = []
    this.startDate = moment(event.startDate).format('YYYY-MM-DD');
    this.endDate = moment(event.endDate).format('YYYY-MM-DD');
    this.updateReportsData()
    }
   
    
  }
  
  
  
  schoolCsvDownload(csvData: any, hierarchyLevel: any) {
    if (csvData && this.drillDownLevel == hierarchyLevel) {
      this.schoolReportsData = [];
      this.schoolReportsData.push(csvData)
    }
  }

  getSchoolReportData(startDate?: string, endDate?: string) {
    let query;
    if (startDate && endDate) {
      this.startDate = startDate;
      this.endDate = endDate;
    }
    else {
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days)
      this.startDate = startDate?.toISOString().split('T')[0];
      this.endDate = endDate?.toISOString().split('T')[0];
    }
   



    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let d = { reportData: res, reportType: 'map', reportName: "teacher_present_school_wise" };
      if (d.reportData.length > 0) {
        this.schoolReportsData.push(d);
      }
    })
  }

  settimeSeriesDates(dates: any) {
    // this.minDate = (this.minDate === undefined || (dates?.minDate && this.minDate < dates.minDate)) ? dates?.minDate : this.minDate
    // this.maxDate = (this.maxDate === undefined || (dates?.maxDate && this.maxDate > dates.maxDate)) ? dates.maxDate : this.maxDate
  }

  

}



