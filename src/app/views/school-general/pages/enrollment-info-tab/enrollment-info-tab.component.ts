import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { config } from 'src/app/views/school-general/config/school_general_config';
import { EnrollmentByCategoryTableComponent } from './reports/enrollment-by-category-table/enrollment-by-category-table.component';
import { EnrollmentByGenderTableComponent } from './reports/enrollment-by-gender-table/enrollment-by-gender-table.component';
import { EnrollmentByEducationBarchartComponent } from './reports/enrollment-by-education-barchart/enrollment-by-education-barchart.component';

import moment from 'moment';
@Component({
  selector: 'app-enrollment-info-tab',
  templateUrl: './enrollment-info-tab.component.html',
  styleUrls: ['./enrollment-info-tab.component.scss']
})
export class EnrollmentInfoTabComponent implements OnInit, OnDestroy {

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
bigNumberMetrics: any = [];
  criteriaConfig: any = config.criteria_config;
  trendLineConfig = {
    options: {
      tooltips: { displayColors: false},
      legend: {display: false}
    }
  };
  filterValues:any;
  drillDownSubscription: any;
  tabLabel:any='School Details';

  //added for full school report download
  // title = "Download School Report"
  schoolReportsData: any[] = [];
  pagereportName = "teachers_present"
  //
  @ViewChild('categoryTable') categoryTable: EnrollmentByCategoryTableComponent;

  @ViewChild('educationBarchart') educationBarchart: EnrollmentByEducationBarchartComponent;
 
  @ViewChild('genderTable') genderTable: EnrollmentByGenderTableComponent;
 
  
  

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

          this.categoryTable?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

          this.genderTable?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

       
        
         
          this.educationBarchart?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
         
          
         
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
      

      // this.getSchoolReportData()
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

    this.categoryTable?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);

    this.genderTable?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
    

   
    this.educationBarchart?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
   
   
   
   
   
  

    }
     filtersUpdated(filters: any) {
      this.reportsData = [];
      this.filters = filters
      this.updateReportsData()
          }
    // filtersUpdated(filters: any) {
    //   this.reportsData = [];
    //   this.filters = filters;
      
    //   // Find the filter with name 'acdemic_year'
    //   const academicYearFilter = this.filters.find((filter: any) => filter.name === 'acdemic_year');
      
    //   // If the filter is found and it has a value, assign it to startDate
    //   if (academicYearFilter && academicYearFilter.value) {
    //     this.startDate = academicYearFilter.value;
    //   }
    
    //   // Update the reports data
    //   this.updateReportsData();
    // }

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
  importBigNumberMetrics(bigNumberMetric: any) {
    this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
}
  

}


