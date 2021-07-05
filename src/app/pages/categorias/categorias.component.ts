import { CategoriaService } from './../../services/categoria.service';
import { Categorias } from './../../Models/categorias.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  nomeCategoria!: string
  result!: any
  resultList!: any

  categorias: Categorias[] =[

    new Categorias('Alimentacao'),
    new Categorias('Transporte'),
    new Categorias('Sexo Anal'),
  ];

  constructor(private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.resultList = this.CategoriaService.list()
    console.log(this.resultList)
  }

  submitForm(){
    this.result = this.CategoriaService.create(this.nomeCategoria)
    console.log(this.result)
  }

  teste(){
    console.log("oi")
  }

}
