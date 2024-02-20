import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEnrollmentComponent } from './student-enrollment.component';
import { StudentEnrollmentRoutingModule } from './student-enrollment-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';



@NgModule({
  declarations: [
    StudentEnrollmentComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    StudentEnrollmentRoutingModule
  ]
})
export class StudentEnrollmentModule { }
