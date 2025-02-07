import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineRepository } from '../../repositories/machine.repository';

@Injectable({
  providedIn: 'root',
})
export class GetMachineStatusUseCase {
  constructor(private machineRepository: MachineRepository) {}

  execute(id: number): Observable<string> {
    return this.machineRepository.getStatus(id);
  }
}