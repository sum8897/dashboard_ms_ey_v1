import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgiGovtAidedComponent } from './pgi-govt-aided.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { PgiGovtAidedRoutingModule } from './pgi-govt-aided-routing.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { PerformingIndicatorsTabsComponent } from './pages/performing-indicators-tabs/performing-indicators-tabs.component';
import { PerformingIndicatorsTableComponent } from './pages/performing-indicators-tabs/reports/performing-indicators-table/performing-indicators-table.component';
import { SchoolSafetyComponent } from './pages/school-safety/school-safety.component';
import { SchoolSafetyBigNumberMetricsComponent } from './pages/school-safety/reports/school-safety-big-number-metrics/school-safety-big-number-metrics.component';
import { SchoolSafetyFirstTableComponent } from './pages/school-safety/reports/school-safety-first-table/school-safety-first-table.component';
import { SchoolSafetyFirstBarChartComponent } from './pages/school-safety/reports/school-safety-first-bar-chart/school-safety-first-bar-chart.component';
import { PerformingIndicatorsTableTwoComponent } from './pages/performing-indicators-tabs/reports/performing-indicators-table-two/performing-indicators-table-two.component';
import { PerformingIndicatorsBigNumberMetricsComponent } from './pages/performing-indicators-tabs/reports/performing-indicators-big-number-metrics/performing-indicators-big-number-metrics.component';


@NgModule({
  declarations: [
    PgiGovtAidedComponent,
    PerformingIndicatorsTabsComponent,
    PerformingIndicatorsTableComponent,
    SchoolSafetyComponent,
    SchoolSafetyBigNumberMetricsComponent,
    SchoolSafetyFirstTableComponent,
    SchoolSafetyFirstBarChartComponent,
    PerformingIndicatorsTableTwoComponent,
    PerformingIndicatorsBigNumberMetricsComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    PgiGovtAidedRoutingModule
  ]

})
export class PgiGovtAidedModule { }
