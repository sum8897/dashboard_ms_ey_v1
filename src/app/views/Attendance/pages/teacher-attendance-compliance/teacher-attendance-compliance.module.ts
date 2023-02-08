import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceComplianceRoutingModule } from './teacher-attendance-compliance-routing.module';
import { TeacherAttendanceComplianceComponent } from './teacher-attendance-compliance.component';
import { AverageAttendanceComplianceComponent } from './reports/average-attendance-compliance/average-attendance-compliance.component';


@NgModule({
  declarations: [
    TeacherAttendanceComplianceComponent,
    AverageAttendanceComplianceComponent
  ],
  imports: [
    CommonModule,
    TeacherAttendanceComplianceRoutingModule
  ]
})
export class TeacherAttendanceComplianceModule { }
