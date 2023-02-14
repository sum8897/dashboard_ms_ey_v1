import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SacAttendanceRoutingModule } from './sac-attendance-routing.module';
import { SacAverageAttendanceComplainceComponent } from './pages/sac-average-attendance-complaince/sac-average-attendance-complaince.component';
import { SasAverageAttendanceComponent } from './pages/sas-average-attendance/sas-average-attendance.component';
import { StudentAttendanceComplainceComponent } from './pages/student-attendance-complaince/student-attendance-complaince.component';
import { StudentAttendanceSummaryComponent } from './pages/student-attendance-summary/student-attendance-summary.component';
import { TeacherAttendanceComplainceComponent } from './pages/teacher-attendance-compliance/teacher-attendance-complaince.component';
import { TeacherAttendanceSummaryComponent } from './pages/teacher-attendance-summary/teacher-attendance-summary.component';
import { StudentAttendanceComplianceComponent } from './pages/student-attendance-compliance/student-attendance-compliance.component';
import { TeacherAttendanceComplianceComponent } from './pages/teacher-attendance-compliance/teacher-attendance-compliance.component';
import { AverageAttendanceComplianceComponent } from './pages/student-attendance-compliance/reports/average-attendance-compliance/average-attendance-compliance.component';
import { AverageAttendanceComponent } from './pages/student-attendance-summary/reports/average-attendance/average-attendance.component';
import { GenderWiseAverageAttendanceComponent } from './pages/student-attendance-summary/reports/gender-wise-average-attendance/gender-wise-average-attendance.component';
import { GradeWiseAverageAttendanceComponent } from './pages/student-attendance-summary/reports/grade-wise-average-attendance/grade-wise-average-attendance.component';


@NgModule({
  declarations: [
    SacAverageAttendanceComplainceComponent,
    SasAverageAttendanceComponent,
    StudentAttendanceComplainceComponent,
    StudentAttendanceSummaryComponent,
    TeacherAttendanceComplainceComponent,
    TeacherAttendanceSummaryComponent,
    StudentAttendanceComplianceComponent,
    TeacherAttendanceComplianceComponent,
    AverageAttendanceComplianceComponent,
    AverageAttendanceComponent,
    GenderWiseAverageAttendanceComponent,
    GradeWiseAverageAttendanceComponent
  ],
  imports: [
    CommonModule,
    SacAttendanceRoutingModule
  ]
})
export class SacAttendanceModule { }
