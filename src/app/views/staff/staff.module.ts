import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { ManagementTabComponent } from './pages/management-tab/management-tab.component';
import { DesignationTabComponent } from './pages/designation-tab/designation-tab.component';
import { InspectigTabComponent } from './pages/inspectig-tab/inspectig-tab.component';
import { SchoolTypeTabComponent } from './pages/school-type-tab/school-type-tab.component';
import { ClassTabComponent } from './pages/class-tab/class-tab.component';
import { GenderTabComponent } from './pages/gender-tab/gender-tab.component';
import { SocialCategoryTabComponent } from './pages/social-category-tab/social-category-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { StaffLeftBignumberMetricsComponent } from './pages/designation-tab/reports/staff-left-bignumber-metrics/staff-left-bignumber-metrics.component';
import { Table1Component } from './pages/designation-tab/reports/table1/table1.component';
import { Table2Component } from './pages/designation-tab/reports/table2/table2.component';
import { TableDepartmentOneComponent } from './pages/management-tab/reports/table-department-one/table-department-one.component';
import { TableDepartmentTwoComponent } from './pages/management-tab/reports/table-department-two/table-department-two.component';
import { InspectingTableOnrComponent } from './pages/inspectig-tab/reports/inspecting-table-onr/inspecting-table-onr.component';
import { SchoolTypeFirstTableComponent } from './pages/school-type-tab/reports/school-type-first-table/school-type-first-table.component';
import { ClassFirstTableComponent } from './pages/class-tab/reports/class-first-table/class-first-table.component';
import { SocialCategotyFirstTableComponent } from './pages/social-category-tab/reports/social-categoty-first-table/social-categoty-first-table.component';
import { GenderFirstTableComponent } from './pages/gender-tab/reports/gender-first-table/gender-first-table.component';

@NgModule({
  declarations: [
    StaffComponent,
    DesignationTabComponent,
    ManagementTabComponent,
    InspectigTabComponent,
    SchoolTypeTabComponent,
    ClassTabComponent,
    GenderTabComponent,
    SocialCategoryTabComponent,
    StaffLeftBignumberMetricsComponent,
    Table1Component,
    Table2Component,
    TableDepartmentOneComponent,
    TableDepartmentTwoComponent,
    InspectingTableOnrComponent,
    SchoolTypeFirstTableComponent,
    ClassFirstTableComponent,
    SocialCategotyFirstTableComponent,
    GenderFirstTableComponent

  ],
  imports: [
    DashletModule.forRoot({
        dataService: DataService
    }),
    CommonModule,
    StaffRoutingModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
  ]
})
export class StaffModule { }
