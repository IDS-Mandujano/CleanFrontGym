import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentRepository } from './core/repositories/equipment.repository';
import { EquipmentApiService } from './data/services/equipment-api.service';
import { MachineRepository } from './core/repositories/machine.repository';
import { MachineApiService } from './data/services/machine-api.service';
import { EquipmentModule } from './presentation/modules/equipment/equipment.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EquipmentModule,
    HttpClientModule
  ],
  providers: [
    {provide : EquipmentRepository, useClass : EquipmentApiService},
    {provide : MachineRepository, useClass : MachineApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
