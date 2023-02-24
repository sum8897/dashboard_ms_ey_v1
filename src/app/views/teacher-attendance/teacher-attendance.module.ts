import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceRoutingModule } from './teacher-attendance-routing.module';
import { TeacherAttendanceComponent } from './teacher-attendance.component';
import { TeacherAttendanceComplianceComponent } from './pages/teacher-attendance-compliance/teacher-attendance-compliance.component';
import { TeacherAttendanceSummaryComponent } from './pages/teacher-attendance-summary/teacher-attendance-summary.component';
import { TacAverageAttendanceComplianceComponent } from './pages/teacher-attendance-compliance/reports/tac-average-attendance-compliance/tac-average-attendance-compliance.component';
import { TasAverageAttendanceComponent } from './pages/teacher-attendance-summary/reports/tas-average-attendance/tas-average-attendance.component';
import { DashletModule } from '@project-sunbird/sb-dashlet-v14';
import { DataService } from 'src/app/core/services/data.service';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { TacAttendanceComplianceRankComponent } from './pages/teacher-attendance-compliance/reports/tac-attendance-compliance-rank/tac-attendance-compliance-rank.component';
import { TacAverageAttendanceRankComponent } from './pages/teacher-attendance-summary/reports/tac-average-attendance-rank/tac-average-attendance-rank.component';


@NgModule({
  declarations: [
    TeacherAttendanceComponent,
    TeacherAttendanceComplianceComponent,
    TeacherAttendanceSummaryComponent,
    TacAverageAttendanceComplianceComponent,
    TasAverageAttendanceComponent,
    TacAttendanceComplianceRankComponent,
    TacAverageAttendanceRankComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService
    }),
    MatTabsModule,
    SharedModule,
    CommonModule,
    TeacherAttendanceRoutingModule
  ]
})
export class TeacherAttendanceModule { }
