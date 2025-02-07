import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../../models/machine';
import { MachineRepository } from '../../repositories/machine.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateMachineUseCase {
  constructor(private machineRepository: MachineRepository) {}

  execute(machine: Machine): Observable<Machine> {
    return this.machineRepository.create(machine);
  }
}