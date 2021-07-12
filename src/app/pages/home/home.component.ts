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

  bancos: Bancos[] = []

  constructor(private ContaService: ContaService) { }

  ngOnInit(): void {
    this.resultList = this.ContaService.list().subscribe((result: any) => {
      result.forEach( (element: any) => {
        this.bancos.push(new Bancos(element.name, element.totalValue, element.id))
      });
    })
  }

  submitForm(){
    this.ContaService.create(this.nomeBanco).subscribe((result:any) => {
      window.location.reload()
    })
  }

  deleteAccount(id: number | undefined){
    this.ContaService.delete(id).subscribe((result: any) => {
      window.location.reload()
    })
  }

}
