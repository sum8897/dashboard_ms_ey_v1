import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolInfraRoutingModule } from './school-infra-routing.module';
import { SchoolInfraComponent } from './school-infra.component';
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    SchoolInfraComponent
  ],
  imports: [
    CommonModule,
    SchoolInfraRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class SchoolInfraModule { }
