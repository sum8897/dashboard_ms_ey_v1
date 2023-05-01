import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchoolInfraComponent} from "./school-infra.component";

const routes: Routes = [
  {path: '', component: SchoolInfraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolInfraRoutingModule { }
