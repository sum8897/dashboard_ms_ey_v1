import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartClassroomComponent } from './smart-classroom.component';
import { SmartClassroomRoutingModule } from './smart-classroom-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { IctClassroomTabComponent } from './pages/ict-classroom-tab/ict-classroom-tab.component';
import { SmartTableComponent } from './pages/ict-classroom-tab/reports/smart-table/smart-table.component';
import { SmartCompleteBignumberComponent } from './pages/ict-classroom-tab/reports/smart-complete-bignumber/smart-complete-bignumber.component';
import { SmartIncompleteBignumberComponent } from './pages/ict-classroom-tab/reports/smart-incomplete-bignumber/smart-incomplete-bignumber.component';



@NgModule({
  declarations: [
    SmartClassroomComponent,
    IctClassroomTabComponent,
    SmartTableComponent,
    SmartCompleteBignumberComponent,
    SmartIncompleteBignumberComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    SmartClassroomRoutingModule
  ]
})
export class SmartClassroomModule { }
