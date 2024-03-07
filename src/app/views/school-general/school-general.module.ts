import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolGeneralRoutingModule } from './school-general-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { SchoolGeneralComponent } from './school-general.component';
import { SchoolDetailsTabComponent } from './pages/school-details-tab/school-details-tab.component';
import { KeyIndicatorsTabComponent } from './pages/key-indicators-tab/key-indicators-tab.component';
import { SchoolBignumberComponent } from './pages/school-details-tab/reports/school-bignumber/school-bignumber.component';
import { DistrictWiseTableComponent } from './pages/school-details-tab/reports/district-wise-table/district-wise-table.component';
import { ManagementBarchartComponent } from './pages/school-details-tab/reports/management-barchart/management-barchart.component';
import { CategoryBarchartComponent } from './pages/school-details-tab/reports/category-barchart/category-barchart.component';



@NgModule({
  declarations: [
    SchoolGeneralComponent,
    SchoolDetailsTabComponent,
    KeyIndicatorsTabComponent,
    SchoolBignumberComponent,
    DistrictWiseTableComponent,
    ManagementBarchartComponent,
    CategoryBarchartComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    SchoolGeneralRoutingModule
  ]
})
export class SchoolGeneralModule { }
