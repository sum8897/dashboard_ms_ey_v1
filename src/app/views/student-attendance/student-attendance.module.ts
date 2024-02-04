import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAttendanceRoutingModule } from './student-attendance-routing.module';
import { StudentAttendanceComponent } from './student-attendance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentAttendanceComplianceComponent } from './pages/student-attendance-compliance/student-attendance-compliance.component';
import { StudentAttendanceSummaryComponent } from './pages/student-attendance-summary/student-attendance-summary.component';
import { SacAverageAttendanceComplianceComponent } from './pages/student-attendance-compliance/reports/sac-average-attendance-compliance/sac-average-attendance-compliance.component';
import { SasAverageAttendanceComponent } from './pages/student-attendance-summary/reports/sas-average-attendance/sas-average-attendance.component';
import { GenderWiseAverageAttendanceComponent } from './pages/student-attendance-summary/reports/gender-wise-average-attendance/gender-wise-average-attendance.component';
import { GradeWiseAverageAttendanceComponent } from './pages/student-attendance-summary/reports/grade-wise-average-attendance/grade-wise-average-attendance.component';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { SacAttendanceComplianceRankComponent } from './pages/student-attendance-compliance/reports/sac-attendance-compliance-rank/sac-attendance-compliance-rank.component';
import { SasAverageAttendanceRankComponent } from './pages/student-attendance-summary/reports/sas-average-attendance-rank/sas-average-attendance-rank.component';
import { SasAverageAttendanceBignumberComponent } from './pages/student-attendance-summary/reports/sas-average-attendance-bignumber/sas-average-attendance-bignumber.component';
import { SacAverageAttendanceComplianceBignumberComponent } from './pages/student-attendance-compliance/reports/sac-average-attendance-compliance-bignumber/sac-average-attendance-compliance-bignumber.component';
import { StudentSummaryTabComponent } from './pages/student-summary-tab/student-summary-tab.component';
import { StudentMapComponent } from './pages/student-summary-tab/reports/student-map/student-map.component';
import { StudentAverageAttendanceTabComponent } from './pages/student-average-attendance-tab/student-average-attendance-tab.component';
import { StudentAverageTableComponent } from './pages/student-average-attendance-tab/reports/student-average-table/student-average-table.component';
import { StudentBignumberComponent } from './pages/student-average-attendance-tab/reports/student-bignumber/student-bignumber.component';
import { StudentSchoolTableComponent } from './pages/student-average-attendance-tab/reports/student-school-table/student-school-table.component';


@NgModule({
  declarations: [
    StudentAttendanceComponent,
    StudentAttendanceComplianceComponent,
    StudentAttendanceSummaryComponent,
    SacAverageAttendanceComplianceComponent,
    SasAverageAttendanceComponent,
    GenderWiseAverageAttendanceComponent,
    GradeWiseAverageAttendanceComponent,
    SacAttendanceComplianceRankComponent,
    SasAverageAttendanceRankComponent,
    SasAverageAttendanceBignumberComponent,
    SacAverageAttendanceComplianceBignumberComponent,
    StudentSummaryTabComponent,
    StudentMapComponent,
    StudentAverageAttendanceTabComponent,
    StudentAverageTableComponent,
    StudentBignumberComponent,
    StudentSchoolTableComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService
    }),
    MatTabsModule,
    SharedModule,
    CommonModule,
    StudentAttendanceRoutingModule
  ]
})
export class StudentAttendanceModule { }
