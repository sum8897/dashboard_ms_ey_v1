import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet-v14';
import {NasRoutingModule} from './nas-routing.module';
import {NasComponent} from './nas.component';

import {DistrictWisePerformanceTabComponent} from './pages/district-wise-performance-tab/district-wise-performance-tab.component';
import {DistrictWisePerformanceComponent} from './pages/district-wise-performance-tab/reports/district-wise-performance/district-wise-performance.component';
import { GradeAndSubjectPerformanceComponent } from './pages/grade-and-subject-performance-tab/reports/grade-and-subject-performance/grade-and-subject-performance.component';
import { GradeAndSubjectPerformanceTabComponent } from './pages/grade-and-subject-performance-tab/grade-and-subject-performance-tab.component';
import { NasBignumberMetricsComponent } from './pages/district-wise-performance-tab/reports/nas-bignumber-metrics/nas-bignumber-metrics.component';

@NgModule({
declarations: [
    NasComponent,
    DistrictWisePerformanceTabComponent,GradeAndSubjectPerformanceTabComponent,
    DistrictWisePerformanceComponent,GradeAndSubjectPerformanceComponent, NasBignumberMetricsComponent
],
imports: [
    DashletModule.forRoot({
        dataService: DataService
    }),
    MatTabsModule,
    SharedModule,
    CommonModule,
    NasRoutingModule
]
})
export class NasModule { }
