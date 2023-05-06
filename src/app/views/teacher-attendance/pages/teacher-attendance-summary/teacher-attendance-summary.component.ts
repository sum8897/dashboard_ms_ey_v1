import { Component, OnInit, ViewChild } from '@angular/core';
import { TacAverageAttendanceRankComponent } from './reports/tac-average-attendance-rank/tac-average-attendance-rank.component';
import { TasAverageAttendanceComponent } from './reports/tas-average-attendance/tas-average-attendance.component';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { TasAverageAttendanceBignumberComponent } from './reports/tas-average-attendance-bignumber/tas-average-attendance-bignumber.component';
import { config } from '../../config/teacher_attendance_config'
import { TeacherAttendanceMapComponent } from './reports/teacher-attendance-map/teacher-attendance-map.component';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-teacher-attendance-summary',
  templateUrl: './teacher-attendance-summary.component.html',
  styleUrls: ['./teacher-attendance-summary.component.scss']
})
export class TeacherAttendanceSummaryComponent implements OnInit {

  bigNumberReports: any = {};
  maxDate: any;
  minDate: any;
  startDate: any;
  endDate: any
  reportsData: any[] = []
  rbacDetails: any;
  defaultSelectedDays: any = 7;
 
  //added for full school report download
  // title = "Download School Report"
  schoolReportsData: any[] = [];
  pagereportName = "teachers_present"
  //
  @ViewChild('averageAttendanceBigNumber') averageAttendanceBigNumber: TasAverageAttendanceBignumberComponent;
  @ViewChild('averageAttendance') averageAttendance: TasAverageAttendanceComponent;
  @ViewChild('averageAttendanceRank') averageAttendanceRank: TacAverageAttendanceRankComponent
  @ViewChild('tasMap') tasMap: TeacherAttendanceMapComponent
  constructor(private readonly _commonService: CommonService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.startDate === undefined && this.endDate === undefined) {
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days)
      this.averageAttendanceBigNumber?.getReportData(startDate?.toISOString().split('T')[0], endDate?.toISOString().split('T')[0]);
      this.averageAttendance?.getReportData(startDate?.toISOString().split('T')[0], endDate?.toISOString().split('T')[0]);
      this.averageAttendanceRank?.getReportData(startDate?.toISOString().split('T')[0], endDate?.toISOString().split('T')[0]);
      this.tasMap?.getReportData({ timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
      this.getSchoolReportData()
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
      this.reportsData.push(csvData)
    }
  }

  getSchoolReportData(startDate?: string, endDate ?: string) {
    let query; 
    if(startDate && endDate)
    {
      this.startDate = startDate;
      this.endDate = endDate;
    }
    else{
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days)
      this.startDate = startDate?.toISOString().split('T')[0];
      this.endDate = endDate?.toISOString().split('T')[0];
    }
    console.log("Date is:",this.startDate, this.endDate);
    if(this.rbacDetails?.role == 1){
      query = `select e.school_id, e.school_name, ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_teachers, sum(a.sum) 
      as attendace_marked from datasets.sch_att_total_teachers_daily_school as b 
      join datasets.sch_att_teachers_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date 
      join dimensions.school as e on a.school_id = e.school_id 
      where a.date between '${this.startDate}' and '${this.endDate}'`
    }else if(this.rbacDetails?.role ==2){
      query = `select e.district_id, e.district_name,e.school_id, e.school_name ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as 
      total_teachers, sum(a.sum)  as attendace_marked from datasets.sch_att_total_teachers_daily_district 
      as b join datasets.sch_att_teachers_marked_daily_district as a on 
      a.district_id = b.district_id and a.date = b.date 
      join dimensions.school as e on a.district = e.district_id 
      where a.date between '${this.startDate}' and '${this.endDate}' and e.district_id = '${this.rbacDetails?.district}' group by e.district_id, e.district_name,e.school_id, e.school_name`; 
    } else if(this.rbacDetails?.role == 3) {
      query = `select ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as 
      total_teachers, sum(a.sum)  as attendace_marked from datasets.sch_att_total_teachers_daily_block as b join 
      datasets.sch_att_teachers_marked_daily_block as a on 
      a.block_id = b.block_id and a.date = b.date 
      join dimensions.school as e on a.block_id = e.block_id 
      where a.date between ${this.startDate} and ${this.endDate} and e.block_id = '${this.rbacDetails?.block}' group by e.district_id, e.district_name, e.block_id,e.block_name,e.school_id, e.school_name`; 
    } else if(this.rbacDetails?.role == 4){
      query = `select district_id, district_name, block_id, block_name, e.cluster_id, e.cluster_name, school_id, school_name, ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_teachers, sum(a.sum)  as attendace_marked from datasets.sch_att_total_teachers_daily_cluster as b join datasets.sch_att_teachers_marked_daily_cluster as a on a.cluster_id = b.cluster_id and a.date = b.date 
      join dimensions.school as e on a.cluster_id = e.cluster_id 
      where a.date between '${this.startDate}' and '${this.endDate}' and
       e.cluster_id = '${this.rbacDetails?.cluster}' group by e.district_id, e.district_name, e.block_id,e.block_name,e.cluster_id,e.cluster_name,e.school_id, e.school_name`; 
   } 
    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let d = { reportData: res, reportType: 'map', reportName: "teacher_present_school_wise" };
      this.schoolReportsData.push(d);
    })
  }

  settimeSeriesDates(dates: any) {
    // this.minDate = (this.minDate === undefined || (dates?.minDate && this.minDate < dates.minDate)) ? dates?.minDate : this.minDate
    // this.maxDate = (this.maxDate === undefined || (dates?.maxDate && this.maxDate > dates.maxDate)) ? dates.maxDate : this.maxDate
  }

  timeSeriesUpdated(event: any): void {
    this.startDate = event?.startDate?.toDate().toISOString().split('T')[0]
    this.endDate = event?.endDate?.toDate().toISOString().split('T')[0]
    if (event?.startDate !== null && event?.endDate !== null) {
      this.reportsData = []
      this.averageAttendanceBigNumber?.getReportData(this.startDate, this.endDate);
      this.averageAttendance?.getReportData(this.startDate, this.endDate);
      this.averageAttendanceRank?.getReportData(this.startDate, this.endDate);
      this.tasMap?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
      this.getSchoolReportData(this.startDate, this.endDate)
    }
  }

}


