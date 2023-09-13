import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { TelemetryRoutingModule } from './telemetry-routing.module';
import { TelemetryComponent } from './telemetry.component';
import { TelemetryTabComponent } from './pages/telemetry-tab/telemetry-tab.component';
import { TelemetryBigNumberComponent } from './pages/telemetry-tab/reports/telemetry-big-number/telemetry-big-number.component';
import { BrowserTypeWiseBarChartComponent } from './pages/telemetry-tab/reports/browser-type-wise-bar-chart/browser-type-wise-bar-chart.component';
import { DeviceTypeWiseBarChartComponent } from './pages/telemetry-tab/reports/device-type-wise-bar-chart/device-type-wise-bar-chart.component';
import { PopularLandingPagesBarChartComponent } from './pages/telemetry-tab/reports/popular-landing-pages-bar-chart/popular-landing-pages-bar-chart.component';
import { TimeSpentPerPageBarChartComponent } from './pages/telemetry-tab/reports/time-spent-per-page-bar-chart/time-spent-per-page-bar-chart.component';
import { TelemetryActiveUsersTrendlineComponent } from './pages/telemetry-tab/reports/telemetry-active-users-trendline/telemetry-active-users-trendline.component';
import { TelemetryActiveUsersBigNumberComponent } from './pages/telemetry-tab/reports/telemetry-active-users-big-number/telemetry-active-users-big-number.component';

@NgModule({
  declarations: [
    TelemetryComponent,
    TelemetryTabComponent,
    TelemetryBigNumberComponent,
    BrowserTypeWiseBarChartComponent,
    DeviceTypeWiseBarChartComponent,
    PopularLandingPagesBarChartComponent,
    TimeSpentPerPageBarChartComponent,
    TelemetryActiveUsersTrendlineComponent,
    TelemetryActiveUsersBigNumberComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService
  }),
  MatTabsModule,
  SharedModule,
  CommonModule,
    TelemetryRoutingModule
  ]
})
export class TelemetryModule { }
