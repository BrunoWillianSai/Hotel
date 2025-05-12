import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from './hospede';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {
  apiUrl = 'http://localhost:3000/hospede';

  constructor(private http: HttpClient) { }
  
  getAll() : Observable<Hospede[]>{
    return this.http.get<Hospede[]>(this.apiUrl); // pede ao servidor a lista de alunos/registro
  }

  save(hospede:Hospede): Observable<Hospede>{
    return this.http.post<Hospede>(this.apiUrl, hospede); // pede ao servidor para salvar o aluno/registro

  }

  delete(hospede:Hospede): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${hospede.id}`); // pede ao servidor para deletar o aluno/registro

 }

  update(hospede:Hospede): Observable<Hospede>{
    return this.http.put<Hospede>(`${this.apiUrl}/${hospede.id}`, hospede); // pede ao servidor para atualizar o aluno/registro

 }
}
