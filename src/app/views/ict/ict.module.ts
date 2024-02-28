import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IctComponent } from './ict.component';
import { IctRoutingModule } from './ict-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { TeleEducationTabComponent } from './pages/tele-education-tab/tele-education-tab.component';
import { TeleEducationTableComponent } from 'src/app/views/ict/pages/tele-education-tab/reports/tele-education-table/tele-education-table.component';
import { TeleCompleteBignumberComponent } from './pages/tele-education-tab/reports/tele-complete-bignumber/tele-complete-bignumber.component';
import { TeleNoncompleteBignumberComponent } from './pages/tele-education-tab/reports/tele-noncomplete-bignumber/tele-noncomplete-bignumber.component';
import { SessionTabComponent } from './pages/session-tab/session-tab.component';
import { SessionTableComponent } from './pages/session-tab/reports/session-table/session-table.component';
import { TeleSessionTabComponent } from './pages/tele-session-tab/tele-session-tab.component';
import { TeleSessionTableComponent } from './pages/tele-session-tab/reports/tele-session-table/tele-session-table.component';
import { SessionBarchrtComponent } from './pages/session-tab/reports/session-barchrt/session-barchrt.component';



@NgModule({
  declarations: [
    IctComponent,
    TeleEducationTabComponent,
    TeleEducationTableComponent,
    TeleCompleteBignumberComponent,
    TeleNoncompleteBignumberComponent,
    SessionTabComponent,
    SessionTableComponent,
    TeleSessionTabComponent,
    TeleSessionTableComponent,
    SessionBarchrtComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    IctRoutingModule
  ]
})
export class IctModule { }
