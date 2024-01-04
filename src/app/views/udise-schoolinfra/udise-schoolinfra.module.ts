import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashletModule, DataService } from '@project-sunbird/sb-dashlet';

import { UdiseSchoolinfraRoutingModule } from './udise-schoolinfra-routing.module';
import { ElectricityComponent } from './pages/electricity/electricity.component';
import { UdiseSchoolinfraMapComponent } from './pages/electricity/reports/udise-schoolinfra-map/udise-schoolinfra-map.component';
import { UdiseSchoolinfraComponent } from './udise-schoolinfra.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WaterComponent } from './pages/water/water.component';
import { CleanlinessHygieneComponent } from './pages/cleanliness-hygiene/cleanliness-hygiene.component';
import { BuldingFacilitiesComponent } from './pages/bulding-facilities/bulding-facilities.component';
import { ToiletUrinalComponent } from './pages/toilet-urinal/toilet-urinal.component';
import { UdiseSchoolinfraWaterMapComponent } from './pages/water/reports/udise-schoolinfra-water-map/udise-schoolinfra-water-map.component';
import { UdiseSchoolinfraToiletMapComponent } from './pages/toilet-urinal/reports/udise-schoolinfra-toilet-map/udise-schoolinfra-toilet-map.component';
import { UdiseSchoolinfraCleanMapComponent } from './pages/cleanliness-hygiene/reports/udise-schoolinfra-clean-map/udise-schoolinfra-clean-map.component';
import { UdiseSchoolinfraBuildingMapComponent } from './pages/bulding-facilities/reports/udise-schoolinfra-building-map/udise-schoolinfra-building-map.component';



@NgModule({
  declarations: [
    UdiseSchoolinfraComponent,
    ElectricityComponent,
    UdiseSchoolinfraMapComponent,
    WaterComponent,
    CleanlinessHygieneComponent,
    BuldingFacilitiesComponent,
    ToiletUrinalComponent,
    UdiseSchoolinfraWaterMapComponent,
    UdiseSchoolinfraToiletMapComponent,
    UdiseSchoolinfraCleanMapComponent,
    UdiseSchoolinfraBuildingMapComponent
  ],
  imports: [
    DashletModule.forRoot({
      dataService: DataService
  }),
  MatTabsModule,
  SharedModule,
    CommonModule,
    MatCheckboxModule,
    UdiseSchoolinfraRoutingModule
  ]
})
export class UdiseSchoolinfraModule { }
