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
import { ComparativeCardComponent } from './pages/performing-indicators-tabs/reports/comparative-card/comparative-card.component';
import { BigNumberPhotographsComponent } from './pages/performing-indicators-tabs/reports/big-number-photographs/big-number-photographs.component';
import { BigNumberTwoComponent } from './pages/performing-indicators-tabs/reports/big-number-two/big-number-two.component';
import { BigNumberThreeComponent } from './pages/performing-indicators-tabs/reports/big-number-three/big-number-three.component';
import { BigNumberFourComponent } from './pages/performing-indicators-tabs/reports/big-number-four/big-number-four.component';
import { BigNumberFiveComponent } from './pages/performing-indicators-tabs/reports/big-number-five/big-number-five.component';
import { BigNumberSixComponent } from './pages/performing-indicators-tabs/reports/big-number-six/big-number-six.component';
import { SchoolBigNumberCardOneComponent } from './pages/school-safety/reports/school-big-number-card-one/school-big-number-card-one.component';
import { SchoolBigNumberCardTwoComponent } from './pages/school-safety/reports/school-big-number-card-two/school-big-number-card-two.component';
import { SchoolBigNumberCardThreeComponent } from './pages/school-safety/reports/school-big-number-card-three/school-big-number-card-three.component';
import { SchoolBigNumberCardFourComponent } from './pages/school-safety/reports/school-big-number-card-four/school-big-number-card-four.component';
import { SchoolBigNumberCardFiveComponent } from './pages/school-safety/reports/school-big-number-card-five/school-big-number-card-five.component';


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
    PerformingIndicatorsBigNumberMetricsComponent,
    ComparativeCardComponent,
    BigNumberPhotographsComponent,
    BigNumberTwoComponent,
    BigNumberThreeComponent,
    BigNumberFourComponent,
    BigNumberFiveComponent,
    BigNumberSixComponent,
    SchoolBigNumberCardOneComponent,
    SchoolBigNumberCardTwoComponent,
    SchoolBigNumberCardThreeComponent,
    SchoolBigNumberCardFourComponent,
    SchoolBigNumberCardFiveComponent
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
