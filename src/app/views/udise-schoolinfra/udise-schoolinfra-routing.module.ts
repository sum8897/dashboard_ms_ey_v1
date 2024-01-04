import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UdiseSchoolinfraComponent } from './udise-schoolinfra.component';

const routes: Routes = [{
  path:'',
  component: UdiseSchoolinfraComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdiseSchoolinfraRoutingModule { }
