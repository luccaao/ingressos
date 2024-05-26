import { PessoasService } from './../../services/pessoas.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  formUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    ingressosComprados: new FormControl([]),
  });

  constructor(private pessoasService: PessoasService) {}

  cadastroDb() {
    console.log(this.formUser.value);
    this.pessoasService.createPessoa(this.formUser.value).subscribe(
      response => {
        console.log('Pessoa cadastrada com sucesso', response);
        // Adicione aqui qualquer lógica adicional que você precise, como redirecionamento ou mensagens de sucesso
      },
      error => {
        console.error('Erro ao cadastrar pessoa', error);
        // Adicione aqui lógica para lidar com o erro, como exibir uma mensagem de erro
      }
    );
  }


}
