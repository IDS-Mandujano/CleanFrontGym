import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment';
import { Equipment } from '../../core/models/equipment';
import { EquipmentRepository } from '../../core/repositories/equipment.repository';

@Injectable({
  providedIn: 'root',
})
export class EquipmentApiService extends EquipmentRepository {
  private apiUrl = `${environment.API_URL}/equipments`;

  constructor(private http: HttpClient) {
    super();
  }

  override create(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(this.apiUrl, equipment);
  }  

  override getAll(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiUrl);
  }
  
  override getById(id: number): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/${id}`);
  }
  
  override update(equipment: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}/${equipment.id}`, equipment);
  }
  
  override delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }  
}