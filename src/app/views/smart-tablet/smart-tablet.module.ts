import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTabletComponent } from './smart-tablet.component';

import { SmartTabletRoutingModule } from './smart-tablet-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { TabletTabComponent } from './pages/tablet-tab/tablet-tab.component';
import { TabletTableComponent } from './pages/tablet-tab/reports/tablet-table/tablet-table.component';
import { TabletCompleteBignumberComponent } from './pages/tablet-tab/reports/tablet-complete-bignumber/tablet-complete-bignumber.component';
import { TabletNoncompleteBignumberComponent } from './pages/tablet-tab/reports/tablet-noncomplete-bignumber/tablet-noncomplete-bignumber.component';
import { NoncompleteBarchartComponent } from './pages/tablet-tab/reports/noncomplete-barchart/noncomplete-barchart.component';

@NgModule({
  declarations: [
    SmartTabletComponent,
    TabletTabComponent,
    TabletTableComponent,
    TabletCompleteBignumberComponent,
    TabletNoncompleteBignumberComponent,
    NoncompleteBarchartComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    SmartTabletRoutingModule
  ]
})
export class SmartTabletModule { }
