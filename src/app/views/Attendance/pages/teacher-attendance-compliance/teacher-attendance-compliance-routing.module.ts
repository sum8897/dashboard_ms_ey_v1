import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAttendanceComplianceComponent} from './teacher-attendance-compliance.component'
const routes: Routes = [
  {
    path:'',
    component: TeacherAttendanceComplianceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherAttendanceComplianceRoutingModule { }
