import { Component, OnInit, ViewChild } from '@angular/core';
import { TsAveragePupilTeacherRatioComponent } from './reports/ts-average-pupil-teacher-ratio/ts-average-pupil-teacher-ratio.component';
import { TsTotalTeachersComponent } from './reports/ts-total-teachers/ts-total-teachers.component';

@Component({
  selector: 'app-teacher-statistics-main',
  templateUrl: './teacher-statistics-main.component.html',
  styleUrls: ['./teacher-statistics-main.component.scss']
})
export class TeacherStatisticsMainComponent implements OnInit {

  bigNumberReports: any = {};
  selectedOption: string;
  academicYear: string[] = [];

  @ViewChild('totalteachers') totalTeachersComponent: TsTotalTeachersComponent;
  @ViewChild('averagepupilteacherratio') averagepupilteacherratioComponent: TsAveragePupilTeacherRatioComponent;

  constructor() { }

  ngOnInit(): void {
  }

  appendBigNumber({ data, reportName }) {
    this.bigNumberReports = {
      ...this.bigNumberReports,
      [reportName]: data
    }
    console.log('the ddata is ............',data);
    this.pushIfUnique(data.dropwownfilterDate)

  }
  minMaxDate(dates:any){
    console.log('the dasdhasvdhgvasfvhfh fbsdvfh',dates);
  }
  pushIfUnique(arr): void {
    console.log('date values',arr);

  arr.forEach(obj => {
    let minYear = parseInt(obj.min_year);
    let maxYear = parseInt(obj.max_year);

    for (let year = minYear; year <= maxYear; year++) {
      if (this.academicYear.indexOf(String(year)) === -1) {
        this.academicYear.push(String(year));
      }
    }
    return this.academicYear;
  });


  }
  onSelectOption(selectedvalue: any): void {
    this.selectedOption = selectedvalue;
    this.totalTeachersComponent.getReportData(selectedvalue)
    this.averagepupilteacherratioComponent.getReportData(selectedvalue)
  }
  getObjectlen(object: Object) {
    return Object.keys(object).length
  }

}
