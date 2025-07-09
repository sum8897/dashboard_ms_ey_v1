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
import { OverallStatusBignumberMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumber-metrics/overall-status-bignumber-metrics.component';
import { OverallStatusBignumbertwoMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumbertwo-metrics/overall-status-bignumbertwo-metrics.component';
import { OverallStatusBignumberthreeMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumberthree-metrics/overall-status-bignumberthree-metrics.component';
import { OverallStatusBignumberfourMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumberfour-metrics/overall-status-bignumberfour-metrics.component';
import { OverallStatusBignumberfiveMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumberfive-metrics/overall-status-bignumberfive-metrics.component';
import { OverallStatusBignumbersixMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumbersix-metrics/overall-status-bignumbersix-metrics.component';
import { OverallStatusBignumberoneMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumberone-metrics/overall-status-bignumberone-metrics.component';
import { OverallStatusBignumbersevenMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumberseven-metrics/overall-status-bignumberseven-metrics.component';
import { OverallStatusBignumbereightMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumbereight-metrics/overall-status-bignumbereight-metrics.component';
import { OverallStatusBignumbernineMetricsComponent } from './pages/overall-status-tab/reports/overall-status-bignumbernine-metrics/overall-status-bignumbernine-metrics.component';
import { ManagementTabComponent } from './pages/management-tab/management-tab.component';
import { AttendanceTableComponent } from './pages/management-tab/attendance-table/attendance-table.component';
//import { AttendanceGraphComponent } from './pages/management-tab/attedance-graph/attedance-graph.component';



@NgModule({
  declarations: [
    StaffAttendanceComponent,
    OverallStatusTabComponent,
    OverallStatusTableComponent,
    OverallStatusBignumberMetricsComponent,
    OverallStatusBignumbertwoMetricsComponent,
    OverallStatusBignumberthreeMetricsComponent,
    OverallStatusBignumberfourMetricsComponent,
    OverallStatusBignumberfiveMetricsComponent,
    OverallStatusBignumbersixMetricsComponent,
    OverallStatusBignumberoneMetricsComponent,
    OverallStatusBignumbersevenMetricsComponent,
    OverallStatusBignumbereightMetricsComponent,
    OverallStatusBignumbernineMetricsComponent,
    ManagementTabComponent,
    AttendanceTableComponent,
    //AttendanceGraphComponent
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
