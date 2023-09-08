import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { TelemetryRoutingModule } from './telemetry-routing.module';
import { TelemetryComponent } from './telemetry.component';
import { TelemetryTabComponent } from './pages/telemetry-tab/telemetry-tab.component';
import { TelemetryBigNumberComponent } from './pages/telemetry-tab/reports/telemetry-big-number/telemetry-big-number.component';

@NgModule({
  declarations: [
    TelemetryComponent,
    TelemetryTabComponent,
    TelemetryBigNumberComponent
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
