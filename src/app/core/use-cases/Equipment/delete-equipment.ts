import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentRepository } from '../../repositories/equipment.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteEquipmentUseCase {
  constructor(private equipmentRepository: EquipmentRepository) {}

  execute(id: number): Observable<void> {
    return this.equipmentRepository.delete(id);
  }
}