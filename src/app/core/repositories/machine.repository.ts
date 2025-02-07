import { Observable } from 'rxjs';
import { Machine } from '../models/machine';

export abstract class MachineRepository {
  abstract getAll(): Observable<Machine[]>;
  abstract getById(id: number): Observable<Machine>;
  abstract getStatus(id: number): Observable<string>;
  abstract create(machine: Machine): Observable<Machine>;
  abstract update(machine: Machine): Observable<Machine>;
  abstract delete(id: number): Observable<void>;
}
