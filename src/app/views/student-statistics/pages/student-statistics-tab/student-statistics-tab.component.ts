import { Component, OnInit, ViewChild } from '@angular/core';
import { GenderWiseStudentEnrollmentComponent } from './reports/gender-wise-student-enrollment/gender-wise-student-enrollment.component';
import { StudentsAndCwsnEnrollmentComponent } from './reports/students-and-cwsn-enrollment/students-and-cwsn-enrollment.component';

@Component({
  selector: 'app-student-statistics-tab',
  templateUrl: './student-statistics-tab.component.html',
  styleUrls: ['./student-statistics-tab.component.scss']
})
export class StudentStatisticsTabComponent implements OnInit {

  bigNumberReports: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  appendBigNumber({data,reportName}) {
    this.bigNumberReports = { 
      ...this.bigNumberReports,
      [reportName]:data
    }
  }

}

