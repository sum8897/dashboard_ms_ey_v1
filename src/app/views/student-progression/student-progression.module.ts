import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentProgressionRoutingModule } from './student-progression-routing.module';
import { StudentProgressionComponent } from './student-progression.component';
import { StudentProgressionViewComponent } from './student-progression-view/student-progression-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentProgressionComponent,
    StudentProgressionViewComponent
  ],
  imports: [
    MatTabsModule,
    SharedModule,
    CommonModule,
    StudentProgressionRoutingModule
  ]
})
export class StudentProgressionModule { }
