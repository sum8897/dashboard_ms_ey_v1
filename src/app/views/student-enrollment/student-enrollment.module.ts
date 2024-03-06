import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEnrollmentComponent } from './student-enrollment.component';
import { StudentEnrollmentRoutingModule } from './student-enrollment-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { StudentEnrollSummaryTabComponent } from './pages/student-enroll-summary-tab/student-enroll-summary-tab.component';
import { StudentComparativeTableComponent } from './pages/student-enroll-summary-tab/reports/student-comparative-table/student-comparative-table.component';
import { StudentComparativeBignumberComponent } from './pages/student-enroll-summary-tab/reports/student-comparative-bignumber/student-comparative-bignumber.component';
import { StudentComparativeSchoolTableComponent } from './pages/student-enroll-summary-tab/reports/student-comparative-school-table/student-comparative-school-table.component';
import { StudentComparativeBarchartComponent } from './pages/student-enroll-summary-tab/reports/student-comparative-barchart/student-comparative-barchart.component';
import { StudentPercentageChangeBignumberComponent } from './pages/student-enroll-summary-tab/reports/student-percentage-change-bignumber/student-percentage-change-bignumber.component';
import { StudentDenrollBignumberComponent } from './pages/student-enroll-summary-tab/reports/student-denroll-bignumber/student-denroll-bignumber.component';



@NgModule({
  declarations: [
    StudentEnrollmentComponent,
    StudentEnrollSummaryTabComponent,
    StudentComparativeTableComponent,
    StudentComparativeBignumberComponent,
    StudentComparativeSchoolTableComponent,
    StudentComparativeBarchartComponent,
    StudentPercentageChangeBignumberComponent,
    StudentDenrollBignumberComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    StudentEnrollmentRoutingModule
  ]
})
export class StudentEnrollmentModule { }
