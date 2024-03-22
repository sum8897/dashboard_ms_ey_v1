import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasComponent } from './pas.component';
import { PasRoutingModule } from './pas-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';
import { ParticipationTabComponent } from './pages/participation-tab/participation-tab.component';




@NgModule({
  declarations: [
    PasComponent,
    ParticipationTabComponent
  ],
  imports: [DashletModule.forRoot({
    dataService: DataService
}),
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    SharedModule,
    PasRoutingModule
  ]
})
export class PasModule { }
