import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffAttendanceRoutingModule } from './staff-attendance-routing.module';
import { StaffAttendanceComponent } from './staff-attendance.component';

import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SharedModule } from "src/app/shared/shared.module";
import { DashletModule, DataService } from "@project-sunbird/sb-dashlet";

import { OverallStatusTabComponent } from './pages/overall-status-tab/overall-status-tab.component';
import { OverallStatusTableComponent } from './pages/overall-status-tab/reports/overall-status-table/overall-status-table.component';



@NgModule({
  declarations: [
    StaffAttendanceComponent,
    OverallStatusTabComponent,
    OverallStatusTableComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService,
    }),
    CommonModule,
    StaffAttendanceRoutingModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
  ],
})
export class StaffAttendanceModule { }
