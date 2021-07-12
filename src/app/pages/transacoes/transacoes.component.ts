import { Transacoes } from './../../Models/transacoes.model';
import { ContaService } from './../../services/conta.service';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Bancos } from 'src/app/Models/banco.model';
import { Categorias } from 'src/app/Models/categorias.model';
import { TransacoesService } from 'src/app/services/transacoes.service';

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

  formSubmission = {
    nome: 0,
    account_in: '',
    account_out: '',
    category: '',
    valor: ''
  }

  sendTransaction!: any
  
  bancos: Bancos[] = []
  categorias: Categorias[] = []

    
  constructor(private CategoriaService: CategoriaService, private ContaService: ContaService,
    private TransacoesService: TransacoesService) { }

  ngOnInit(): void {

    this.ContaService.list().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.bancos.push(new Bancos(element.name, element.totalValue, element.id))
      });
    })

    this.CategoriaService.list().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.categorias.push(new Categorias(element.name, element.id))
      });
    })

  }

  submitForm(){
    if (this.formSubmission.nome == 0 || this.formSubmission.nome == 1){
      this.sendTransaction = this.TransacoesService.treatDataSpentRevenue(this.formSubmission)
      if (this.formSubmission.nome == 0){
        this.sendTransaction.name = 'RECEITA'
        this.TransacoesService.createRevenues(this.sendTransaction).subscribe((result:any) => {
          window.location.reload()
        }, error => {
          window.location.reload()
        })
      } else {
        this.sendTransaction.name = 'DESPESA'
        console.log(this.sendTransaction)
        this.TransacoesService.createSpents(this.sendTransaction).subscribe((result:any) => {
          window.location.reload()
        }, error => {
          window.location.reload()
        })
      }
    } else if (this.formSubmission.nome == 2) {
      this.sendTransaction = this.TransacoesService.treatDataTransfer(this.formSubmission)
      this.sendTransaction.name = "TRANSFERENCIA ENTRE CONTAS"
      this.TransacoesService.createTransfers(this.sendTransaction).subscribe((result:any) => {
        window.location.reload()
      }, error => {
        window.location.reload()
      })
    }
  }

}
