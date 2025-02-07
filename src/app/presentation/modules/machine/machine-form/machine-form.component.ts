import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateMachineUseCase } from '../../../../core/use-cases/Machine/create-equipment';
import { Machine } from '../../../../core/models/machine';

@Component({
  selector: 'app-machine-form',
  templateUrl: './machine-form.component.html',
  styleUrls: ['./machine-form.component.css']
})
export class MachineFormComponent {
  machineForm: FormGroup;
  statusOptions = [
    { value: '1', label: 'Disponible' },
    { value: '2', label: 'En uso' },
    { value: '3', label: 'Mantenimiento' },
  ];

  constructor(
    private fb: FormBuilder,
    private createMachineUseCase: CreateMachineUseCase
  ) {
    this.machineForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.machineForm.valid) {
      const newMachine: Machine = {
        ...this.machineForm.value,
        status: this.machineForm.value.status,
      };

      this.createMachineUseCase.execute(newMachine).subscribe({
        next: (machine) => console.log('Máquina creada:', machine),
        error: (err) => console.error('Error al crear máquina:', err),
      });
    }
  }
}