import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../../models/machine';
import { MachineRepository } from '../../repositories/machine.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllMachinesUseCase {
  constructor(private machineRepository: MachineRepository) {}

  execute(): Observable<Machine[]> {
    return this.machineRepository.getAll();
  }
}