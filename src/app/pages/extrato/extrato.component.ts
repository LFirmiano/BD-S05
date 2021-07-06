import { Transacoes } from './../../Models/transacoes.model';
import { TransacoesService } from './../../services/transacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  todasTransacoes: Transacoes[] = []

  constructor(private TransacoesService: TransacoesService) { }

  ngOnInit(): void {
    
    this.TransacoesService.listSpents().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.todasTransacoes.push({
          date: element.transDate,
          nome: element.transactionName,
          valor: element.transValue,
          id: element.id,
        })
      });
    })

    this.TransacoesService.listRevenues().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.todasTransacoes.push({
          date: element.transDate,
          nome: element.transactionName,
          valor: element.transValue,
          id: element.id,
        })
      });
    })

    this.TransacoesService.listTransfers().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.todasTransacoes.push({
          date: element.transDate,
          nome: element.transactionName,
          valor: element.transValue,
          id: element.id,
        })
      });

      console.log(this.todasTransacoes)
    })


  }

}
