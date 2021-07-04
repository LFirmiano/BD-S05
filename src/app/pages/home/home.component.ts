import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Extrato',
    },
    {
      title: 'Investimento',
    },
    {
      title: 'Transacoes',
    },
    {
      title: 'Meus Dados',
    }
  ];
}
