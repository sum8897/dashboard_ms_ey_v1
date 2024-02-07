import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolLibraryComponent } from './school-library.component';

import { SchoolLibraryRoutingModule } from './school-library-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { OverallSummaryTabComponent } from './pages/overall-summary-tab/overall-summary-tab.component';
import { SummaryTableComponent } from './pages/overall-summary-tab/reports/summary-table/summary-table.component';



@NgModule({
  declarations: [
    SchoolLibraryComponent,
    OverallSummaryTabComponent,
    SummaryTableComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    SchoolLibraryRoutingModule
  ]
})
export class SchoolLibraryModule { }
