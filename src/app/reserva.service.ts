import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  apiUrl = 'http://localhost:3000/reserva';

  constructor(private http: HttpClient) { }
  
  getAll() : Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.apiUrl); // pede ao servidor a lista de alunos/registro
  }

  save(reserva:Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.apiUrl, reserva); // pede ao servidor para salvar o aluno/registro

  }

  delete(reserva:Reserva): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${reserva.id}`); // pede ao servidor para deletar o aluno/registro

 }

  update(reserva:Reserva): Observable<Reserva>{
    return this.http.put<Reserva>(`${this.apiUrl}/${reserva.id}`, reserva); // pede ao servidor para atualizar o aluno/registro

 }
}
