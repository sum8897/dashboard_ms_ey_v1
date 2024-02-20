import { RouterModule, Routes } from '@angular/router';
import { StudentEnrollmentComponent } from './student-enrollment.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  StudentEnrollmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentEnrollmentRoutingModule { }