import { Router } from '@angular/router';
import { PessoasService } from './pessoas.service';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioSubject = new BehaviorSubject<any>(
    this.loadUserFromLocalStorage()
  );
  usuarioEmitido = this.usuarioSubject.asObservable();

  constructor(private pessoasService: PessoasService, private router: Router) {}

  onlogin(user: any) {
    this.pessoasService.getPessoas().subscribe((pessoas: any[]) => {
      const pessoa = pessoas.find(
        (p) => p.email === user.email && p.password === user.password
      );
      if (pessoa) {
        console.log('Usuário logado com sucesso');
        this.router.navigate(['/home']);
        this.usuarioSubject.next(user);
      } else {
        console.log('Usuário ou senha incorretos');
      }
    });
  }

  onLogout() {
    throw new Error('Method not implemented.');
  }

  loadUserFromLocalStorage() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }
}
