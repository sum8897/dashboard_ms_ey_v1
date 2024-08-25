import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolGeneralRoutingModule } from './school-general-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { SchoolGeneralComponent } from './school-general.component';
import { SchoolDetailsTabComponent } from './pages/school-details-tab/school-details-tab.component';
import { KeyIndicatorsTabComponent } from './pages/key-indicators-tab/key-indicators-tab.component';
import { SchoolBignumberComponent } from './pages/school-details-tab/reports/school-bignumber/school-bignumber.component';
import { DistrictWiseTableComponent } from './pages/school-details-tab/reports/district-wise-table/district-wise-table.component';
import { ManagementBarchartComponent } from './pages/school-details-tab/reports/management-barchart/management-barchart.component';
import { CategoryBarchartComponent } from './pages/school-details-tab/reports/category-barchart/category-barchart.component';
import { ClassroomRatioTableComponent } from './pages/school-details-tab/reports/classroom-ratio-table/classroom-ratio-table.component';
import { ReceiptsBarchartComponent } from './pages/school-details-tab/reports/receipts-barchart/receipts-barchart.component';
import { TeacherRatioTableComponent } from './pages/school-details-tab/reports/teacher-ratio-table/teacher-ratio-table.component';
import { EnrollmentInfoTabComponent } from './pages/enrollment-info-tab/enrollment-info-tab.component';
import { EnrollmentByEducationBarchartComponent } from './pages/enrollment-info-tab/reports/enrollment-by-education-barchart/enrollment-by-education-barchart.component';
import { EnrollmentByGenderTableComponent } from './pages/enrollment-info-tab/reports/enrollment-by-gender-table/enrollment-by-gender-table.component';
import { EnrollmentByCategoryTableComponent } from './pages/enrollment-info-tab/reports/enrollment-by-category-table/enrollment-by-category-table.component';
import { GrossEnrollTableComponent } from './pages/key-indicators-tab/reports/gross-enroll-table/gross-enroll-table.component';
import { NetEnrollTableComponent } from './pages/key-indicators-tab/reports/net-enroll-table/net-enroll-table.component';
import { GenderParityBarchartComponent } from './pages/key-indicators-tab/reports/gender-parity-barchart/gender-parity-barchart.component';
import { SchoolDetailsBigNumberCardOneComponent } from './pages/school-details-tab/reports/school-details-big-number-card-one/school-details-big-number-card-one.component';
import { SchoolDetailsBigNumberCardTwoComponent } from './pages/school-details-tab/reports/school-details-big-number-card-two/school-details-big-number-card-two.component';
import { SchoolDetailsBigNumberCardThreeComponent } from './pages/school-details-tab/reports/school-details-big-number-card-three/school-details-big-number-card-three.component';
import { SchoolDetailsBigNumberCardFourComponent } from './pages/school-details-tab/reports/school-details-big-number-card-four/school-details-big-number-card-four.component';



@NgModule({
  declarations: [
    SchoolGeneralComponent,
    SchoolDetailsTabComponent,
    KeyIndicatorsTabComponent,
    SchoolBignumberComponent,
    DistrictWiseTableComponent,
    ManagementBarchartComponent,
    CategoryBarchartComponent,
    ClassroomRatioTableComponent,
    ReceiptsBarchartComponent,
    TeacherRatioTableComponent,
    EnrollmentInfoTabComponent,
    EnrollmentByEducationBarchartComponent,
    EnrollmentByGenderTableComponent,
    EnrollmentByCategoryTableComponent,
    GrossEnrollTableComponent,
    NetEnrollTableComponent,
    GenderParityBarchartComponent,
    SchoolDetailsBigNumberCardOneComponent,
    SchoolDetailsBigNumberCardTwoComponent,
    SchoolDetailsBigNumberCardThreeComponent,
    SchoolDetailsBigNumberCardFourComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    SchoolGeneralRoutingModule
  ]
})
export class SchoolGeneralModule { }
