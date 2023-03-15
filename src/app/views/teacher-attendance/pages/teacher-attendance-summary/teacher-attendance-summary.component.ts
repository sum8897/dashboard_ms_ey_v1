import { Component, OnInit, ViewChild } from '@angular/core';
import { TacAverageAttendanceRankComponent } from './reports/tac-average-attendance-rank/tac-average-attendance-rank.component';
import { TasAverageAttendanceComponent } from './reports/tas-average-attendance/tas-average-attendance.component';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { TasAverageAttendanceBignumberComponent } from './reports/tas-average-attendance-bignumber/tas-average-attendance-bignumber.component';
import { config } from '../../config/teacher_attendance_config'
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

  @ViewChild('averageAttendanceBigNumber') averageAttendanceBigNumber: TasAverageAttendanceBignumberComponent;
  @ViewChild('averageAttendance') averageAttendance: TasAverageAttendanceComponent;
  @ViewChild('averageAttendanceRank') averageAttendanceRank: TacAverageAttendanceRankComponent
  constructor(private _rbacService: RbacService) {
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
    }
  }

}


