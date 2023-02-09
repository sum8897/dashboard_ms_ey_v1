import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceComplianceRoutingModule } from './teacher-attendance-compliance-routing.module';
import { TeacherAttendanceComplianceComponent } from './teacher-attendance-compliance.component';
import { AverageAttendanceComplianceComponent } from './reports/average-attendance-compliance/average-attendance-compliance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeacherAttendanceComplianceComponent,
    AverageAttendanceComplianceComponent
  ],
  imports: [
    MatTabsModule,
    SharedModule,
    CommonModule,
    TeacherAttendanceComplianceRoutingModule
  ]
})
export class TeacherAttendanceComplianceModule { }
