import { RouterModule, Routes } from '@angular/router';
import { StudentAiAttendanceComponent } from './student-ai-attendance.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:  StudentAiAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAiAttendanceRoutingModule { }