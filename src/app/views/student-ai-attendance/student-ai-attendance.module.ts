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
import { StudentAverageBignumberComponent } from './pages/student-average-tab/reports/student-average-bignumber/student-average-bignumber.component';
import { StudentAverageTableComponent } from './pages/student-average-tab/reports/student-average-table/student-average-table.component';
import { StudentAverageSchoolTableComponent } from './pages/student-average-tab/reports/student-average-school-table/student-average-school-table.component';



@NgModule({
  declarations: [
    StudentAiAttendanceComponent,
    MapViewTabComponent,
    StudentMapViewComponent,
    StudentAverageTabComponent,
    StudentAverageBignumberComponent,
    StudentAverageTableComponent,
    StudentAverageSchoolTableComponent
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
