import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceRoutingModule } from './teacher-attendance-routing.module';
import { TeacherAttendanceComponent } from './teacher-attendance.component';
import { TeacherAttendanceComplianceComponent } from './pages/teacher-attendance-compliance/teacher-attendance-compliance.component';
import { TeacherAttendanceSummaryComponent } from './pages/teacher-attendance-summary/teacher-attendance-summary.component';
import { TacAverageAttendanceComplianceComponent } from './pages/teacher-attendance-compliance/reports/tac-average-attendance-compliance/tac-average-attendance-compliance.component';
import { TasAverageAttendanceComponent } from './pages/teacher-attendance-summary/reports/tas-average-attendance/tas-average-attendance.component';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { TacAttendanceComplianceRankComponent } from './pages/teacher-attendance-compliance/reports/tac-attendance-compliance-rank/tac-attendance-compliance-rank.component';
import { TacAverageAttendanceRankComponent } from './pages/teacher-attendance-summary/reports/tac-average-attendance-rank/tac-average-attendance-rank.component';
import { TasAverageAttendanceBignumberComponent } from './pages/teacher-attendance-summary/reports/tas-average-attendance-bignumber/tas-average-attendance-bignumber.component';
import { TacAttendanceComplianceBignumberComponent } from './pages/teacher-attendance-compliance/reports/tac-attendance-compliance-bignumber/tac-attendance-compliance-bignumber.component';
import { TeacherAttendanceMapComponent } from './pages/teacher-attendance-summary/reports/teacher-attendance-map/teacher-attendance-map.component';
import { TasAverageAttendanceBarchartComponent } from './pages/teacher-attendance-summary/reports/tas-average-attendance-barchart/tas-average-attendance-barchart.component';
import { AverageAttendanceSchoolTableComponent } from './pages/teacher-attendance-summary/reports/average-attendance-school-table/average-attendance-school-table.component';
import { TasTrendlineChartComponent } from './pages/teacher-attendance-summary/reports/tas-trendline-chart/tas-trendline-chart.component';
import { NonTeachingAttendanceTabComponent } from './pages/non-teaching-attendance-tab/non-teaching-attendance-tab.component';
import { NonTeachingMapComponent } from './pages/non-teaching-attendance-tab/reports/non-teaching-map/non-teaching-map.component';
import { TeachingAttendanceTabComponent } from './pages/teaching-attendance-tab/teaching-attendance-tab.component';
import { TeachingMapComponent } from './pages/teaching-attendance-tab/reports/teaching-map/teaching-map.component';
import { TeacherSummaryTabComponent } from './pages/teacher-summary-tab/teacher-summary-tab.component';
import { TeacherBignumberComponent } from './pages/teacher-summary-tab/reports/teacher-bignumber/teacher-bignumber.component';
import { TeacherSchoolTableComponent } from './pages/teacher-summary-tab/reports/teacher-school-table/teacher-school-table.component';
import { TeacherAverageTableComponent } from './pages/teacher-summary-tab/reports/teacher-average-table/teacher-average-table.component';



@NgModule({
  declarations: [
    TeacherAttendanceComponent,
    TeacherAttendanceComplianceComponent,
    TeacherAttendanceSummaryComponent,
    TacAverageAttendanceComplianceComponent,
    TasAverageAttendanceComponent,
    TacAttendanceComplianceRankComponent,
    TacAverageAttendanceRankComponent,
    TasAverageAttendanceBignumberComponent,
    TacAttendanceComplianceBignumberComponent,
    TeacherAttendanceMapComponent,
    TasAverageAttendanceBarchartComponent,
    AverageAttendanceSchoolTableComponent,
    TasTrendlineChartComponent,
    NonTeachingAttendanceTabComponent,
    NonTeachingMapComponent,
    TeachingAttendanceTabComponent,
    TeachingMapComponent,
    TeacherSummaryTabComponent,
    TeacherBignumberComponent,
    TeacherSchoolTableComponent,
    TeacherAverageTableComponent,
   
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
