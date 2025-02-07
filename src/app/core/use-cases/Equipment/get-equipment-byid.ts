import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../../models/equipment';
import { EquipmentRepository } from '../../repositories/equipment.repository';

@Injectable({
  providedIn: 'root',
})
export class GetEquipmentByIdUseCase {
  constructor(private equipmentRepository: EquipmentRepository) {}

  execute(id: number): Observable<Equipment> {
    return this.equipmentRepository.getById(id);
  }
}