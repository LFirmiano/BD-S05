import { Component, OnInit } from '@angular/core';
import { Bancos } from 'src/app/Models/banco.model';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  bancos: Bancos[] =[

    new Bancos('Next',100.2),
    new Bancos('Inter',58),
    new Bancos('Nubank',80.4),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
