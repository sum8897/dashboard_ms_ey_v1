import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchoolProgComponent} from "./school-prog.component";

const routes: Routes = [
  {path: '', component: SchoolProgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolProgRoutingModule { }
