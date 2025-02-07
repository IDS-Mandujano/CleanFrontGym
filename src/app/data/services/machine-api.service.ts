import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment';
import { Machine } from '../../core/models/machine';
import { MachineRepository } from '../../core/repositories/machine.repository';

@Injectable({
  providedIn: 'root',
})
export class MachineApiService extends MachineRepository {
  private apiUrl = `${environment.API_URL}/machines`;

  constructor(private http: HttpClient) {
    super();
  }

  override getAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl);
  }

  override getById(id: number): Observable<Machine> {
    return this.http.get<Machine>(`${this.apiUrl}/${id}`);
  }

  override getStatus(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${id}/status`);
  }

  override create(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(this.apiUrl, machine);
  }

  override update(machine: Machine): Observable<Machine> {
    return this.http.put<Machine>(`${this.apiUrl}/${machine.id}`, machine);
  }

  override delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}