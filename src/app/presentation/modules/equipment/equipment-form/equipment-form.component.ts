import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateEquipmentUseCase } from '../../../../core/use-cases/Equipment/create-equipment';
import { Equipment } from '../../../../core/models/equipment';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent {
  equipmentForm: FormGroup;
  conditionOptions = [
    { value: '1', label: 'Nuevo' },
    { value: '2', label: 'Bueno' },
    { value: '3', label: 'Desgastado' },
    { value: '4', label: 'Roto' }
  ];

  constructor(
    private fb: FormBuilder,
    private createEquipmentUseCase: CreateEquipmentUseCase
  ) {
    this.equipmentForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      condition: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.equipmentForm.valid) {
      const newEquipment: Equipment = {
        ...this.equipmentForm.value,
        condition: this.equipmentForm.value.condition
      };

      this.createEquipmentUseCase.execute(newEquipment).subscribe({
        next: (equipment) => console.log('Equipo creado:', equipment),
        error: (err) => console.error('Error al crear equipo:', err),
      });
    }
  }
}