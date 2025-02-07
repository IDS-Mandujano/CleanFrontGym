import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineRepository } from '../../repositories/machine.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteMachineUseCase {
  constructor(private machineRepository: MachineRepository) {}

  execute(id: number): Observable<void> {
    return this.machineRepository.delete(id);
  }
}