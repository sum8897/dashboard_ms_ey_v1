import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { config } from 'src/app/views/student-ai-attendance/config/student_ai_attendance_config';
import { StudentMapViewComponent } from './reports/student-map-view/student-map-view.component';
import moment from 'moment';

@Component({
  selector: 'app-map-view-tab',
  templateUrl: './map-view-tab.component.html',
  styleUrls: ['./map-view-tab.component.scss']
})
export class MapViewTabComponent implements OnInit, AfterViewInit {
  bigNumberReports: any = {};
  maxDate: any;
  minDate: any;
  minYear: any;
  maxYear: any;
  minMonth: any;
  maxMonth: any;
  academicYear: any = [];
  months: any = [];
  filters: any;
  reportsToBeShown: any = [];
  rbacDetails: any;
  reportsData: any = [];
  startDate: any;
  endDate: any;
  defaultSelectedDays: any;
  hasTimeSeriesFilters: boolean = false;
  hasCommonFilters: boolean = true;
  bigNumberMetrics: any = [];
  tabLabel:any='Map View OF Student Attendance';
    // tabName:any ='Student Performance';

  @ViewChild('studentmap') studentmap:StudentMapViewComponent

  constructor(private _wrapperService: WrapperService, private _rbacService: RbacService){
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
        this.rbacDetails = rbacDetails;
    })
    }

    async ngOnInit(): Promise<void> {
  }
 

  async ngAfterViewInit(): Promise<void> {
    if (this.hasCommonFilters) {
        this.filters = await this._wrapperService.constructCommonFilters(config.filters,this.tabLabel);
        this.studentmap?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
        }
    else if(this.hasCommonFilters===false){
        // this.studentavailability?.getReportData({filterneed: this.hasCommonFilters});
        
    }
    if (this.startDate === undefined && this.endDate === undefined && this.hasTimeSeriesFilters) {
        let endDate = new Date();
        let days = endDate.getDate() - this.defaultSelectedDays;
        let startDate = new Date();
        startDate.setDate(days);
        this.startDate = moment(startDate).format('YYYY-MM-DD');
        this.endDate = moment(endDate).format('YYYY-MM-DD');
       
        }
    }
    checkReport(key: string, reportType: string): Boolean {
    let reportConfig = config;
    let flag = false;
    reportConfig[key]?.filters?.forEach((filter: any) => {
        if (Number(filter.hierarchyLevel) === Number(this.rbacDetails?.role) && Object.keys(filter?.actions?.queries).includes(reportType)) {
        flag = true
        }
        // console.log("consoleeeee",this.filters.queries)
    })
    return flag
    
    }
    
  

    csvDownload(csvData: any) {
    if (csvData) {
        this.reportsData.push(csvData)
        
    }
    // console.log("my csv",csvData)
    }

    


    updateReportsData( ): void {
     
      console.log(this.filters,this.startDate,this.endDate)

      
      this.studentmap?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
    }
    

    filtersUpdated(filters: any) {
      this.reportsData = [];
      this.filters = filters
      this.updateReportsData()
          }

          timeSeriesUpdated(event: any): void {
            if (event?.startDate !== null && event?.endDate !== null) {
                  this.reportsData = []
                  // this.schoolReportsData = []
            this.startDate = moment(event.startDate).format('YYYY-MM-DD');
            this.endDate = moment(event.endDate).format('YYYY-MM-DD');
            this.updateReportsData()
            }
           
            
          }
          

    importBigNumberMetrics(bigNumberMetric: any) {
      this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
  }
  }
