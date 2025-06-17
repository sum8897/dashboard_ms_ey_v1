import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentsAttendanceRoutingModule } from "./students-attendance-routing.module";
import { StudentsAttendanceComponent } from "./students-attendance.component";

import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SharedModule } from "src/app/shared/shared.module";
import { DashletModule, DataService } from "@project-sunbird/sb-dashlet";
import { ManagementTabComponent } from "./pages/management-tab/management-tab.component";
import { SchoolTypeTabComponent } from "./pages/school-type-tab/school-type-tab.component";
import { GenderTabComponent } from "./pages/gender-tab/gender-tab.component";
import { SocialCategoryTabComponent } from "./pages/social-category-tab/social-category-tab.component";
import { AttendanceTableComponent } from "./pages/management-tab/reports/attendance-table/attendance-table.component";
import { AttendanceGraphComponent } from "./pages/management-tab/reports/attendance-graph/attendance-graph.component";
import { SchoolTypeTableComponent } from './pages/school-type-tab/reports/school-type-table/school-type-table.component';
import { SchoolTypeGraphComponent } from './pages/school-type-tab/reports/school-type-graph/school-type-graph.component';
import { GenderTableComponent } from './pages/gender-tab/reports/gender-table/gender-table.component';
import { GenderGraphComponent } from './pages/gender-tab/reports/gender-graph/gender-graph.component';
import { SocialCategoryTableComponent } from './pages/social-category-tab/reports/social-category-table/social-category-table.component';
import { SocialCategoryGraphComponent } from './pages/social-category-tab/reports/social-category-graph/social-category-graph.component';

@NgModule({
  declarations: [
    StudentsAttendanceComponent,
    ManagementTabComponent,
    SchoolTypeTabComponent,
    GenderTabComponent,
    SocialCategoryTabComponent,
    AttendanceTableComponent,
    AttendanceGraphComponent,
    SchoolTypeTableComponent,
    SchoolTypeGraphComponent,
    GenderTableComponent,
    GenderGraphComponent,
    SocialCategoryTableComponent,
    SocialCategoryGraphComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService,
    }),
    CommonModule,
    StudentsAttendanceRoutingModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
  ],
})
export class StudentsAttendanceModule {}
