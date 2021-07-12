import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  baseUrl = 'http://localhost:8080/transactions/'
  result: any
  
  constructor(private http: HttpClient) { }
  
  // GASTOS
  listSpents() {
    return this.http.get(this.baseUrl + 'spents')
  }

  readByIdSpents(id: string | null) {
    const url =`${this.baseUrl}spents/${id}`
    this.result =  this.http.get(url)
  }

  createSpents(gastos: any){
    return this.http.post(this.baseUrl + 'spents/', gastos)
  }

  deleteSpents(id: number){
    const url =`${this.baseUrl}spents/${id}`
    return this.http.delete(url)
  }

  // RECEITA
  listRevenues() {
    return this.http.get(this.baseUrl + 'revenues/')
  }

  readByIdRevenues(id: string | null) {
    const url =`${this.baseUrl}revenues/${id}`
    this.result =  this.http.get(url)
  }

  createRevenues(gastos: any){
    return this.http.post(this.baseUrl + 'revenues/', gastos)
  }

  deleteRevenues(id: number){
    const url =`${this.baseUrl}revenues/${id}`
    return this.http.delete(url)
  }

  // TRANSFERENCIAS
  listTransfers() {
    return this.http.get(this.baseUrl + 'transfers/')
  }

  readByIdTransfers(id: string | null) {
    const url =`${this.baseUrl}transfers/${id}`
    this.result =  this.http.get(url)
  }

  createTransfers(gastos: any){
    return this.http.post(this.baseUrl + 'transfers/', gastos)
  }

  deleteTransfers(id: number){
    const url =`${this.baseUrl}transfers/${id}`
    return this.http.delete(url)
  }

  // GERAR JSON RECEITA/GASTOS
  treatDataSpentRevenue(input: any){
    return {name: input.nome, account: parseInt(input.account_in), value: parseFloat(input.valor), category: parseInt(input.category)}
  }

  // GERAR JSON TRANSFERENCIAS
  treatDataTransfer(input: any){
    return {name: input.nome, account_in: input.account_in, account_out: input.account_out, value: parseFloat(input.valor), category: input.category}
  }

}
