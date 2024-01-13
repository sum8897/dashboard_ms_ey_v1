import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }