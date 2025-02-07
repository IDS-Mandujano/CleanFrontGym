import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../../models/machine';
import { MachineRepository } from '../../repositories/machine.repository';

@Injectable({
  providedIn: 'root',
})
export class GetMachineByIdUseCase {
  constructor(private machineRepository: MachineRepository) {}

  execute(id: number): Observable<Machine> {
    return this.machineRepository.getById(id);
  }
}