import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IngressosComponent } from '../ingressos/ingressos.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IngressosComponent, MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  usuarioAuth = {
    email: '',
    password: ''
  
  }

  constructor(private authService: AuthService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.usuarioEmitido.subscribe((data: any) => {
      
      if (!data) {
        return;
      }
      else {
      this.usuarioAuth = data;
      
      localStorage.setItem('usuario', JSON.stringify(this.usuarioAuth));
      this.usuarioAuth = this.authService.loadUserFromLocalStorage()
       
      

    }
      
    })
  }


  logout() {
    this.authService.onLogout();
  }
}
