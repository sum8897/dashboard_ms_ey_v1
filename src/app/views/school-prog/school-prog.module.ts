import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolProgRoutingModule } from './school-prog-routing.module';
import { SchoolProgComponent } from './school-prog.component';
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    SchoolProgComponent
  ],
  imports: [
    CommonModule,
    SchoolProgRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class SchoolProgModule { }
