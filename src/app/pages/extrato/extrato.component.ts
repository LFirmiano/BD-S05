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
          id: element.id,
          date: element.date,
          nome: "DESPESA",
          valor: element.value,
          accountIn: undefined,
          accountOut: element.account,
        })
      });
    })

    this.TransacoesService.listRevenues().subscribe((result: any) => {
      result.forEach( (element: any) => {
        console.log(element)
        this.todasTransacoes.push({
          id: element.id,
          date: element.date,
          nome: "RECEITA",
          valor: element.value,
          accountIn: element.account,
          accountOut: undefined,
        })
      });
    })

    this.TransacoesService.listTransfers().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.todasTransacoes.push({
          id: element.id,
          date: element.date,
          nome: "TRANSFERENCIA ENTRE CONTAS",
          valor: element.value,
          accountIn: element.accountIn,
          accountOut: element.accountOut,
        })
      });
    })


  }

  deletar(id: any, nome: any){
    if (nome == "DESPESA"){
      this.TransacoesService.deleteSpents(id).subscribe((result: any) => {
        window.location.reload()
      })
    } else if (nome == "RECEITA"){
      this.TransacoesService.deleteRevenues(id).subscribe((result: any) => {
        window.location.reload()
      })
    } else {
      this.TransacoesService.deleteTransfers(id).subscribe((result: any) => {
        window.location.reload()
      })
    }
  }

}
