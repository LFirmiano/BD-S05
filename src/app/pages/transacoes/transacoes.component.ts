import { Component, OnInit } from '@angular/core';
import { Bancos } from 'src/app/Models/banco.model';
import { Categorias } from 'src/app/Models/categorias.model';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']
})
export class TransacoesComponent implements OnInit {

  tipos = [
    {value: 0, nome: 'Receita'},
    {value: 1, nome: 'Despesa'},
    {value: 2, nome: 'Transferencia'}
  ]

  selected!: number
  
  bancos: Bancos[] =[

    new Bancos('Next',100.2),
    new Bancos('Inter',58),
    new Bancos('Nubank',80.4),
  ];

  categorias: Categorias[] =[

    new Categorias('Alimentacao'),
    new Categorias('Transporte'),
    new Categorias('Sexo Anal'),
  ];

    
  constructor() { }

  ngOnInit(): void {
  }

  mudaVal(id: number){
    this.selected = id
  }

}
