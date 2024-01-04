import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatComponent } from './pat.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { PatRoutingModule } from './pat-routing.module';
import { PerformanceTabComponent } from './pages/performance-tab/performance-tab.component';
import { PerformanceComponent } from './pages/performance-tab/reports/performance/performance.component';
import { LoWisePerformanceTabComponent } from './pages/lo-wise-performance-tab/lo-wise-performance-tab.component';
import { LoWisePerformanceComponent } from './pages/lo-wise-performance-tab/reports/lo-wise-performance/lo-wise-performance.component';
import { QuesWisePerformanceTabComponent } from './pages/ques-wise-performance-tab/ques-wise-performance-tab.component';
import { QuesWisePerformanceComponent } from './pages/ques-wise-performance-tab/reports/ques-wise-performance/ques-wise-performance.component';
import { LoTrendlineChartComponent } from './pages/lo-wise-performance-tab/reports/lo-trendline-chart/lo-trendline-chart.component';
import { LoAverageBarchartComponent } from './pages/lo-wise-performance-tab/reports/lo-average-barchart/lo-average-barchart.component';
import { LoAverageSchoolTableComponent } from './pages/lo-wise-performance-tab/reports/lo-average-school-table/lo-average-school-table.component';
import { LoAverageBignumberComponent } from './pages/lo-wise-performance-tab/reports/lo-average-bignumber/lo-average-bignumber.component';
import { ChartsModule } from 'ng2-charts';
import { QuesAverageSchoolTableComponent } from './pages/ques-wise-performance-tab/reports/ques-average-school-table/ques-average-school-table.component';
import { QuesAverageBignumberComponent } from './pages/ques-wise-performance-tab/reports/ques-average-bignumber/ques-average-bignumber.component';
import { QuesAverageBarchartComponent } from './pages/ques-wise-performance-tab/reports/ques-average-barchart/ques-average-barchart.component';


@NgModule({
  declarations: [
    PatComponent,
    PerformanceTabComponent,
    PerformanceComponent,
    LoWisePerformanceTabComponent,
    LoWisePerformanceComponent,
    QuesWisePerformanceTabComponent,
    QuesWisePerformanceComponent,
    LoTrendlineChartComponent,
    LoAverageBarchartComponent,
    LoAverageSchoolTableComponent,
    LoAverageBignumberComponent,
    QuesAverageSchoolTableComponent,
    QuesAverageBignumberComponent,
    QuesAverageBarchartComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    PatRoutingModule,
    ChartsModule,

  ]
})
export class PatModule { }
