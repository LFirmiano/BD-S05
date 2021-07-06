import { Transacoes } from './../../Models/transacoes.model';
import { ContaService } from './../../services/conta.service';
import { CategoriaService } from './../../services/categoria.service';
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

  formSubmission = {
    nome: 0,
    account_in: '',
    account_out: '',
    category_id: '',
    valor: ''
  }
  
  bancos: Bancos[] = []
  categorias: Categorias[] = []

    
  constructor(private CategoriaService: CategoriaService, private ContaService: ContaService) { }

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
    console.log(this.formSubmission)
  }

}
