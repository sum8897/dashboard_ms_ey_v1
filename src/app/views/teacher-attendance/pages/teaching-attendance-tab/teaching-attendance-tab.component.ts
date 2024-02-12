import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { TeachingMapComponent } from './reports/teaching-map/teaching-map.component';
import { config } from 'src/app/views/teacher-attendance/config/teacher_attendance_config';
import moment from 'moment';

@Component({
  selector: 'app-teaching-attendance-tab',
  templateUrl: './teaching-attendance-tab.component.html',
  styleUrls: ['./teaching-attendance-tab.component.scss']
})
export class TeachingAttendanceTabComponent implements OnInit, AfterViewInit {
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
  defaultSelectedDays: any = 7;
  hasTimeSeriesFilters: boolean = false;
  hasCommonFilters: boolean = true;
  bigNumberMetrics: any = [];
  tabLabel:any='Map View of Teacher Attendance';
    // tabName:any ='Student Performance';

  @ViewChild('teachingmap') teachingmap:TeachingMapComponent

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
       console.log('line no 51 inside ngafter',this.startDate,this.endDate);
        this.teachingmap?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
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
      this.teachingmap?.getReportData({ filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) },this.startDate,this.endDate);
    }
    

    filtersUpdated(filters: any) {
      this.reportsData = [];
      this.filters = filters
      if (this.startDate === undefined && this.endDate === undefined) {
        let endDate = new Date();
        let days = endDate.getDate() - this.defaultSelectedDays;
        let startDate = new Date();
        startDate.setDate(days);
        this.startDate = moment(startDate).format('YYYY-MM-DD');
        this.endDate = moment(endDate).format('YYYY-MM-DD');
       
        }
      console.log('line 100 inside tab',this.startDate,this.endDate,this.minDate,this.maxDate,this.defaultSelectedDays)
      this.updateReportsData()
          }

          timeSeriesUpdated(event: any): void {
            if (event?.startDate !== null && event?.endDate !== null) {
                  this.reportsData = []
                  // this.schoolReportsData = []
            this.startDate = moment(event.startDate).format('YYYY-MM-DD');
            this.endDate = moment(event.endDate).format('YYYY-MM-DD');
            console.log('line 110 inside tab',this.startDate,this.endDate)
            this.updateReportsData()
            }
           
            
          }
          

    importBigNumberMetrics(bigNumberMetric: any) {
      this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
  }
  }

