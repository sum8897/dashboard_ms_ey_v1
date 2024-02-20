import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAiAttendanceComponent } from './student-ai-attendance.component';
import { StudentAiAttendanceRoutingModule } from './student-ai-attendance-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { MapViewTabComponent } from './pages/map-view-tab/map-view-tab.component';
import { StudentMapViewComponent } from './pages/map-view-tab/reports/student-map-view/student-map-view.component';
import { StudentAverageTabComponent } from './pages/student-average-tab/student-average-tab.component';
import { StudentAverageAbsentTabComponent } from './pages/student-average-absent-tab/student-average-absent-tab.component';
import { StudentAverageBignumberComponent } from './pages/student-average-tab/reports/student-average-bignumber/student-average-bignumber.component';
import { StudentAverageTableComponent } from './pages/student-average-tab/reports/student-average-table/student-average-table.component';
import { StudentAverageSchoolTableComponent } from './pages/student-average-tab/reports/student-average-school-table/student-average-school-table.component';
import { StudentBarchartComponent } from './pages/student-average-tab/reports/student-barchart/student-barchart.component';
import { StudentTrendlineComponent } from './pages/student-average-tab/reports/student-trendline/student-trendline.component';
import { StudentAbsentBarchartComponent } from './pages/student-average-absent-tab/reports/student-absent-barchart/student-absent-barchart.component';
import { StudentAbsentTrendlineComponent } from './pages/student-average-absent-tab/reports/student-absent-trendline/student-absent-trendline.component';
import { StudentAverageAbsentSchoolTableComponent } from './pages/student-average-absent-tab/reports/student-average-absent-school-table/student-average-absent-school-table.component';
import { StudentAverageAbsentTableComponent } from './pages/student-average-absent-tab/reports/student-average-absent-table/student-average-absent-table.component';
import { StudentAverageAbsentBignumberComponent } from './pages/student-average-absent-tab/reports/student-average-absent-bignumber/student-average-absent-bignumber.component';
// Absent tab imports


@NgModule({
  declarations: [
    StudentAiAttendanceComponent,
    MapViewTabComponent,
    StudentMapViewComponent,
    StudentAverageTabComponent,
    StudentAverageAbsentTabComponent,
    StudentAverageBignumberComponent,
    StudentAverageTableComponent,
    StudentAverageSchoolTableComponent,
    StudentBarchartComponent,
    StudentTrendlineComponent,
    StudentAbsentBarchartComponent,
    StudentAbsentTrendlineComponent,
    StudentAverageAbsentTabComponent,
    StudentAverageAbsentSchoolTableComponent,
    StudentAverageAbsentTableComponent,
    StudentAverageAbsentBignumberComponent,
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    StudentAiAttendanceRoutingModule
  ]
})
export class StudentAiAttendanceModule { }
