import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Extrato'
    },
    {
      title: 'Investimento',
      link: '/investimentos'
    },
    {
      title: 'Transacoes',
      link: '/transacoes'
    },
    {
      title: 'Meus Dados',
    }
  ];

}
