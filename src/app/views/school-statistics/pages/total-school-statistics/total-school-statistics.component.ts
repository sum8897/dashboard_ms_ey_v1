import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryWiseTotalSchoolsComponent } from './reports/category-wise-total-schools/category-wise-total-schools.component';
import { EnrolmentWiseSchoolsComponent } from './reports/enrolment-wise-schools/enrolment-wise-schools.component';
import { TotalSchoolsComponent } from './reports/total-schools/total-schools.component';

@Component({
  selector: 'app-total-school-statistics',
  templateUrl: './total-school-statistics.component.html',
  styleUrls: ['./total-school-statistics.component.scss']
})
export class TotalSchoolStatisticsComponent implements OnInit {

  bigNumberReports: any = {};


  @ViewChild('totalschools') totalSchoolsComponent:TotalSchoolsComponent;
  @ViewChild('categoryWiseTotalSchools') categoryWiseTotalSchoolsComponent: CategoryWiseTotalSchoolsComponent;
  @ViewChild('enrolmentWiseSchools') enrolmentWiseSchoolsComponent: EnrolmentWiseSchoolsComponent;
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

}
