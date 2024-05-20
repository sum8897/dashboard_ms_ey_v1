import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffStudentsComponent } from './staff-students.component';
import { StaffDetailsTabComponent } from './pages/staff-details-tab/staff-details-tab.component';
import { StudentsDetailsTabComponent } from './pages/students-details-tab/students-details-tab.component';


;

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { TeleEducationTabComponent } from './pages/tele-education-tab/tele-education-tab.component';
import { TeleEducationTableComponent } from 'src/app/views/ict/pages/tele-education-tab/reports/tele-education-table/tele-education-table.component';
import { TeleCompleteBignumberComponent } from './pages/tele-education-tab/reports/tele-complete-bignumber/tele-complete-bignumber.component';
import { TeleNoncompleteBignumberComponent } from './pages/tele-education-tab/reports/tele-noncomplete-bignumber/tele-noncomplete-bignumber.component';
import { SessionTabComponent } from './pages/session-tab/session-tab.component';
import { SessionTableComponent } from './pages/session-tab/reports/session-table/session-table.component';

import { SessionBarchrtComponent } from './pages/session-tab/reports/session-barchrt/session-barchrt.component';
import { StaffStudentsRoutingModule } from './staff-students-routing.module';
import { TeacherByAppointmentComponent } from './pages/staff-details-tab/reports/teacher-by-appointment/teacher-by-appointment.component';
import { TeacherByAppointmentTableComponent } from './pages/staff-details-tab/reports/teacher-by-appointment-table/teacher-by-appointment-table.component';
import { TeacherEngagementByEducationLevelComponent } from './pages/staff-details-tab/reports/teacher-engagement-by-education-level/teacher-engagement-by-education-level.component';
import { TeacherByGenderAndSocialCategoryComponent } from './pages/staff-details-tab/reports/teacher-by-gender-and-social-category/teacher-by-gender-and-social-category.component';
import { TeacherByHighestAcademicQualificationComponent } from './pages/staff-details-tab/reports/teacher-by-highest-academic-qualification/teacher-by-highest-academic-qualification.component';
import { TeacherByHighestProfessionalQualificationComponent } from './pages/staff-details-tab/reports/teacher-by-highest-professional-qualification/teacher-by-highest-professional-qualification.component';
import { StaffDetailsBigNumberMetricsComponent } from './pages/staff-details-tab/reports/staff-details-big-number-metrics/staff-details-big-number-metrics.component';
import { StudentsDetailsCardBigNumberComponent } from './pages/students-details-tab/reports/students-details-card-big-number/students-details-card-big-number.component';
import { BplBeneficiariesTableComponent } from './pages/students-details-tab/reports/bpl-beneficiaries-table/bpl-beneficiaries-table.component';
import { CwsnEnrolmentsComponent } from './pages/students-details-tab/reports/cwsn-enrolments/cwsn-enrolments.component';


@NgModule({
  declarations: [
    StaffStudentsComponent,
    StaffDetailsTabComponent,
    StudentsDetailsTabComponent,
    TeacherByAppointmentComponent,
    TeacherByAppointmentTableComponent,
    TeacherEngagementByEducationLevelComponent,
    TeacherByGenderAndSocialCategoryComponent,
    TeacherByHighestAcademicQualificationComponent,
    TeacherByHighestProfessionalQualificationComponent,
    StaffDetailsBigNumberMetricsComponent,
    StudentsDetailsCardBigNumberComponent,
    BplBeneficiariesTableComponent,
    CwsnEnrolmentsComponent,
    
  ],
  // imports: [
  //   CommonModule,
  // ]
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    StaffStudentsRoutingModule
  ],
})
export class StaffStudentsModule { }
