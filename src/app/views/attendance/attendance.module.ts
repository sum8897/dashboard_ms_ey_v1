import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';

import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentAttendanceNewComponent } from './pages/student-attendance-new/student-attendance-new.component';
import { StudentAttendanceMapComponent } from './pages/student-attendance-map/student-attendance-map.component';
import { StudentAttendanceBarComponent } from './pages/student-attendance-bar/student-attendance-bar.component';
import { DashletModule} from '@project-sunbird/sb-dashlet-v14';
import { DataService } from 'src/app/core/services/data.service';
import { SACStudentsAttendanceComplianceComponent } from './pages/sac-students-attendance-compliance/sac-students-attendance-compliance.component';


@NgModule({
  declarations: [
    AttendanceComponent,
    StudentAttendanceNewComponent,
    StudentAttendanceMapComponent,
    StudentAttendanceBarComponent,
    SACStudentsAttendanceComplianceComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService
    }),
    SharedModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatButtonModule,
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
