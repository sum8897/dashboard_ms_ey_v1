import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { ChartsModule } from 'ng2-charts';

import { SummaryTabComponent } from './pages/summary-tab/summary-tab.component';
import { DistrictWiseSummaryTabComponent } from './pages/district-wise-summary-tab/district-wise-summary-tab.component';
import { SchoolWiseLibraryTabComponent } from './pages/school-wise-library-tab/school-wise-library-tab.component';
import { SchoolTableComponent } from './pages/school-wise-library-tab/reports/school-table/school-table.component';
import { DistrictTableComponent } from './pages/district-wise-summary-tab/reports/district-table/district-table.component';
import { SummaryTableComponent } from './pages/summary-tab/reports/summary-table/summary-table.component';
import { SummaryChartComponent } from './pages/summary-tab/reports/summary-chart/summary-chart.component';


@NgModule({
    declarations: [
      LibraryComponent,
      SummaryTabComponent,
      DistrictWiseSummaryTabComponent,
      SchoolWiseLibraryTabComponent,
      SchoolTableComponent,
      DistrictTableComponent,
      SummaryTableComponent,
      SummaryChartComponent
     
    ],
    imports: [DashletModule.forRoot({
      dataService: DataService
  }),
      CommonModule,
      MatTabsModule,
      MatCheckboxModule,
      SharedModule,
      LibraryRoutingModule,
      ChartsModule,
  
    ]
  })
  export class LibraryModule { }