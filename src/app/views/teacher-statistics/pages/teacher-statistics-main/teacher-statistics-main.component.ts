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
  options = ['Please select', '2023', '2024',];
  academicYear: string[] = ['Please select'];

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
    this.pushIfUnique(data.dropwownfilterDate)
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
    console.log('asvdhgvvd',this.academicYear);
    return this.academicYear;
  });


  }
  onSelectOption(selectedvalue: any): void {
    this.selectedOption = selectedvalue;
    this.totalTeachersComponent.getReportData(this.selectedOption)
    this.averagepupilteacherratioComponent.getReportData(this.selectedOption)
  }
  getObjectlen(object: Object) {
    return Object.keys(object).length
  }

}
