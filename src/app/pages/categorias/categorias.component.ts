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

  categorias: Categorias[] = [] 

  constructor(private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.resultList = this.CategoriaService.list().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.categorias.push(new Categorias(element.name, element.id))
      });
    })
  }

  submitForm(){
    this.CategoriaService.create(this.nomeCategoria).subscribe((result: any) => {
      window.location.reload()
    })
  }

  deleteCategory(id: number | undefined){
    this.CategoriaService.delete(id).subscribe((result: any) => {
      window.location.reload()
    })
  }

}
