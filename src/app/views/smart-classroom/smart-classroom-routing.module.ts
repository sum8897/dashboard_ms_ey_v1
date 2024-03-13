import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartClassroomComponent } from './smart-classroom.component';

const routes: Routes = [
  {
    path:'',
    component:  SmartClassroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartClassroomRoutingModule { }