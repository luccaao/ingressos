import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../Pessoa.model';
import { Ingresso } from '../Ingresso.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private API = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { 

   }

  getPessoas(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.API);

 }

  getPessoa(id: number){
    return this.httpClient.get(`${this.API}/${id}`);
  }

  createPessoa(pessoa: any): Observable<any> {
    return this.httpClient.post<any>(this.API, pessoa);
  }

  

  

  

}
