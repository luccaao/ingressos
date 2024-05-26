import { PessoasService } from './../../services/pessoas.service';
import { CommonModule } from '@angular/common';
import { IngressosService } from './../../services/ingressos.service';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import { Ingresso } from '../../Ingresso.model';

@Component({
  selector: 'app-ingressos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './ingressos.component.html',
  styleUrl: './ingressos.component.css'
})
export class IngressosComponent {



  constructor(private ingressosService: IngressosService) { }

  ingressos!: any[];

  ngOnInit(): void {
    this.ingressosService.getIngressos().subscribe((data: any) => {
      this.ingressos = data;
    });
  }

  

}
