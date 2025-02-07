import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment';

export abstract class EquipmentRepository {
  abstract getAll(): Observable<Equipment[]>;
  abstract getById(id: number): Observable<Equipment>;
  abstract create(equipment: Equipment): Observable<Equipment>;
  abstract update(equipment: Equipment): Observable<Equipment>;
  abstract delete(id: number): Observable<void>;
}