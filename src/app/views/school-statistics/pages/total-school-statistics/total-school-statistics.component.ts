import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { buildQuery, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { config } from '../../config/school_statistics_config';
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
    console.log('dadasdsadasd',data);
  }
  getObjectlen(object:Object){
    return Object.keys(object).length
  }

}
