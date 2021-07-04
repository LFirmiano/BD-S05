import { Component, OnInit } from '@angular/core';
import { Bancos } from 'src/app/Models/banco.model';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']
})
export class TransacoesComponent implements OnInit {

  
  bancos: Bancos[] =[

    new Bancos('Next',100.2),
    new Bancos('Inter',58),
    new Bancos('Nubank',80.4),
    ];

    
  constructor() { }

  ngOnInit(): void {
  }

}
