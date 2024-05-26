import { PessoasService } from './../../services/pessoas.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    formUser = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  
  })

  constructor(private authService: AuthService , private router: Router) { }

  login() {
    console.log(this.formUser.value);
    
    this.authService.onlogin(this.formUser.value);
  }

  cadastro() { 
    this.router.navigate(['cadastro']);
  }

}
