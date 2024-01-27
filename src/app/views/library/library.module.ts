import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { ChartsModule } from 'ng2-charts';


import { DistrictWiseSummaryTabComponent } from './pages/district-wise-summary-tab/district-wise-summary-tab.component';
import { SchoolWiseLibraryTabComponent } from './pages/school-wise-library-tab/school-wise-library-tab.component';
import { SchoolTableComponent } from './pages/school-wise-library-tab/reports/school-table/school-table.component';
import { DistrictTableComponent } from './pages/district-wise-summary-tab/reports/district-table/district-table.component';
import { SummaryBarChartComponent } from './pages/school-wise-library-tab/reports/summary-bar-chart/summary-bar-chart.component';
import { DemographicSummaryComponent } from './pages/demographic-summary/demographic-summary.component';
import { MapSummaryComponent } from './pages/demographic-summary/reports/map-summary/map-summary.component';
import { AnalysisBarchartComponent } from './pages/district-wise-summary-tab/reports/analysis-barchart/analysis-barchart.component';



@NgModule({
    declarations: [
      LibraryComponent,
      DistrictWiseSummaryTabComponent,
      SchoolWiseLibraryTabComponent,
      SchoolTableComponent,
      DistrictTableComponent,
      SummaryBarChartComponent,
      DemographicSummaryComponent,
      MapSummaryComponent,
      AnalysisBarchartComponent,
     
     
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