import { Component, OnInit, ViewChild } from '@angular/core';
import { GenderWiseAverageAttendanceComponent } from './reports/gender-wise-average-attendance/gender-wise-average-attendance.component';
import { GradeWiseAverageAttendanceComponent } from './reports/grade-wise-average-attendance/grade-wise-average-attendance.component';
import { SasAverageAttendanceRankComponent } from './reports/sas-average-attendance-rank/sas-average-attendance-rank.component';
import { SasAverageAttendanceComponent } from './reports/sas-average-attendance/sas-average-attendance.component';

@Component({
  selector: 'app-student-attendance-summary',
  templateUrl: './student-attendance-summary.component.html',
  styleUrls: ['./student-attendance-summary.component.scss']
})
export class StudentAttendanceSummaryComponent implements OnInit {

  bigNumberReports: any = {};
  maxDate: any;
  minDate: any;
  startDate: any;
  endDate: any;

  @ViewChild('averageAttendance') averageAttendanceCompliance:SasAverageAttendanceComponent;
  @ViewChild('genderWiseAverageAttendance') genderWiseAverageAttendance: GenderWiseAverageAttendanceComponent;
  @ViewChild('gradeWiseAverageAttendance') gradeWiseAverageAttendance: GradeWiseAverageAttendanceComponent;
  @ViewChild('averageAttendanceRank') averageAttendanceComplianceRank:SasAverageAttendanceRankComponent;

  constructor() { }

  ngOnInit(): void {
  }

  appendBigNumber({data,reportName}) {
    this.bigNumberReports = { 
      ...this.bigNumberReports,
      [reportName]:data
    }
  }
  getObjectlen(object:Object){
    return Object.keys(object).length
  }

  settimeSeriesDates(dates: any) {
    this.minDate = (this.minDate === undefined || (dates?.minDate && this.minDate < dates.minDate)) ? dates?.minDate : this.minDate
    this.maxDate = (this.maxDate === undefined || (dates?.maxDate && this.maxDate > dates.maxDate)) ? dates.maxDate : this.maxDate
  }

  timeSeriesUpdated(event: any): void {
    this.startDate = event?.startDate?.toDate().toISOString().split('T')[0]
    this.endDate = event?.endDate?.toDate().toISOString().split('T')[0]
    if (event?.startDate !== null && event?.endDate !== null) {
      this.averageAttendanceCompliance?.getReportData(this.startDate, this.endDate);
      this.genderWiseAverageAttendance?.getReportData(this.startDate, this.endDate);
      this.gradeWiseAverageAttendance?.getReportData(this.startDate, this.endDate);
      this.averageAttendanceComplianceRank?.getReportData(this.startDate, this.endDate);
    }
  }

}
