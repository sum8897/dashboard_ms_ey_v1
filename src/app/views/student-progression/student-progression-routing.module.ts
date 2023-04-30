import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProgressionComponent } from './student-progression.component';

const routes: Routes = [
  {
    path: '',
    component: StudentProgressionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentProgressionRoutingModule { }
