import { Component, OnInit, ViewChild } from '@angular/core';
import { SacAttendanceComplianceRankComponent } from './reports/sac-attendance-compliance-rank/sac-attendance-compliance-rank.component';
import { SacAverageAttendanceComplianceComponent } from './reports/sac-average-attendance-compliance/sac-average-attendance-compliance.component';

@Component({
  selector: 'app-student-attendance-compliance',
  templateUrl: './student-attendance-compliance.component.html',
  styleUrls: ['./student-attendance-compliance.component.scss']
})
export class StudentAttendanceComplianceComponent implements OnInit {

  bigNumberReports: any = {};
  maxDate: any;
  minDate: any;
  startDate: any;
  endDate: any

  @ViewChild('averageAttendanceCompliance') averageAttendanceCompliance: SacAverageAttendanceComplianceComponent;
  @ViewChild('attendanceComplianceRank') attendanceComplianceRank: SacAttendanceComplianceRankComponent
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
      this.attendanceComplianceRank?.getReportData(this.startDate, this.endDate)
    }
  }

}
