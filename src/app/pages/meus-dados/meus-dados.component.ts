import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  nome: string = 'Lucas Firmiano Silva Girao'
  cpf: string = '000.305.903-00'
  conta: string = '12345678-9'
  agencia: string = '1234'
  pix: string = '000.305.903-00'

  constructor() { }

  ngOnInit(): void {
  }

}
