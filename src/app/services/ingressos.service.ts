import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ingresso } from '../Ingresso.model';


@Injectable({
  providedIn: 'root'
})
export class IngressosService {

  private API = 'http://localhost:3000/ingressos';
  private UserAPI = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient, router: Router) { 

   }

  getIngressos(){
    return this.httpClient.get(this.API);
    }

  

}
