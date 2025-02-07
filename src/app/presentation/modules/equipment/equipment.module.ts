import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';



@NgModule({
  declarations: [
    EquipmentFormComponent,
    EquipmentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EquipmentFormComponent,
    EquipmentListComponent
  ]
})
export class EquipmentModule { }
