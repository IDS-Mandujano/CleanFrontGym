import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../../models/equipment';
import { EquipmentRepository } from '../../repositories/equipment.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateEquipmentUseCase {
  constructor(private equipmentRepository: EquipmentRepository) {}

  execute(equipment: Equipment): Observable<Equipment> {
    return this.equipmentRepository.create(equipment);
  }
}