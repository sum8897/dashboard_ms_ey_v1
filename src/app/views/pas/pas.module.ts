import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasComponent } from './pas.component';
import { PasRoutingModule } from './pas-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { ParticipationTabComponent } from './pages/participation-tab/participation-tab.component';
import { SchoolParticipationTableComponent } from './pages/participation-tab/reports/school-participation-table/school-participation-table.component';
import { StudentParticipationTableComponent } from './pages/participation-tab/reports/student-participation-table/student-participation-table.component';
import { QuestionWiseBarchartComponent } from './pages/participation-tab/reports/question-wise-barchart/question-wise-barchart.component';




@NgModule({
  declarations: [
    PasComponent,
    ParticipationTabComponent,
    SchoolParticipationTableComponent,
    StudentParticipationTableComponent,
    QuestionWiseBarchartComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    PasRoutingModule
  ]
})
export class PasModule { }
