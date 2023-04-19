import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet-v14';
import {UdiseRoutingComponent} from './udise-routing.module';
import {UdiseComponent} from './udise.component';

import {DistrictWisePerformanceTabComponent} from './pages/district-wise-performance-tab/district-wise-performance-tab.component';
import {DistrictWisePerformanceComponent} from './pages/district-wise-performance-tab/reports/district-wise-performance/district-wise-performance.component';
import { CorrelationTabComponent } from './pages/correlation-tab/correlation-tab.component';
import { CorrelationComponent } from './pages/correlation-tab/reports/correlation/correlation.component';
import { UdiseBignumberMetricsComponent } from './pages/district-wise-performance-tab/reports/udise-bignumber-metrics/udise-bignumber-metrics.component';
import { StateWisePerformanceTabComponent } from './pages/state-wise-performance-tab/state-wise-performance-tab.component';
import { StateWisePerformanceComponent } from './pages/state-wise-performance-tab/reports/state-wise-performance/state-wise-performance.component';

@NgModule({
declarations: [
    UdiseComponent,
    DistrictWisePerformanceTabComponent,CorrelationTabComponent,
    DistrictWisePerformanceComponent,CorrelationComponent, UdiseBignumberMetricsComponent, StateWisePerformanceTabComponent, StateWisePerformanceComponent
],
imports: [
    DashletModule.forRoot({
        dataService: DataService
    }),
    MatTabsModule,
    SharedModule,
    CommonModule,
    UdiseRoutingComponent
]
})
export class UdiseModule { }
