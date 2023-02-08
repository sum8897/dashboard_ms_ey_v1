import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';

import { StudentAttendanceComplianceRoutingModule } from './student-attendance-compliance-routing.module';
import { StudentAttendanceComplianceComponent } from './student-attendance-compliance.component';
import { AverageAttendanceComplianceComponent } from './reports/average-attendance-compliance/average-attendance-compliance.component';


@NgModule({
  declarations: [
    StudentAttendanceComplianceComponent,
    AverageAttendanceComplianceComponent
  ],
  imports: [
    MatTabsModule,
    SharedModule,
    CommonModule,
    StudentAttendanceComplianceRoutingModule
  ]
})
export class StudentAttendanceComplianceModule { }
