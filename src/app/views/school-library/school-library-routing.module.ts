import { RouterModule, Routes } from '@angular/router';
import { SchoolLibraryComponent } from './school-library.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  SchoolLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolLibraryRoutingModule { }