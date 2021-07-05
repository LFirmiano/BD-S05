import { ContaService } from './../../services/conta.service';
import { Bancos } from './../../Models/banco.model';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeBanco!: string
  result!: any
  resultList!: any

  bancos: Bancos[] =[

    new Bancos('Next',100.2),
    new Bancos('Inter',58),
    new Bancos('Nubank',80.4),
  ];

  constructor(private ContaService: ContaService) { }

  ngOnInit(): void {
    this.resultList = this.ContaService.list()
    console.log(this.resultList)
  }

  submitForm(){
    this.result = this.ContaService.create(this.nomeBanco)
    console.log(this.result)
  }

}
