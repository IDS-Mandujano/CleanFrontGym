import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineFormComponent } from './machine-form/machine-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MachineFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    MachineFormComponent
  ]
})
export class MachineModule { }
