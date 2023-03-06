import { Component, OnInit, ViewChild } from '@angular/core';
import { TacAttendanceComplianceRankComponent } from './reports/tac-attendance-compliance-rank/tac-attendance-compliance-rank.component';
import { TacAverageAttendanceComplianceComponent } from './reports/tac-average-attendance-compliance/tac-average-attendance-compliance.component';

@Component({
  selector: 'app-teacher-attendance-compliance',
  templateUrl: './teacher-attendance-compliance.component.html',
  styleUrls: ['./teacher-attendance-compliance.component.scss']
})
export class TeacherAttendanceComplianceComponent implements OnInit {

  bigNumberReports: any = {};
  maxDate: any;
  minDate: any;
  startDate: any;
  endDate: any;
  reportsData : any[]=[]

  @ViewChild('averageAttendanceCompliance') averageAttendanceCompliance:TacAverageAttendanceComplianceComponent;
  @ViewChild('attenadanceComplianceRank') attenadanceComplianceRank: TacAttendanceComplianceRankComponent;
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
  csvDownload(csvData:any){
    if(csvData){
     this.reportsData.push(csvData)
     }
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
      this.attenadanceComplianceRank?.getReportData(this.startDate, this.endDate)
    }
  }

}
