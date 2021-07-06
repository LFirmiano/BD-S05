import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  baseUrl = 'http://path.com.br/transactions/'
  result: any
  
  constructor(private http: HttpClient) { }
  
  // GASTOS
  listSpents() {
    this.result = this.http.get(this.baseUrl + 'spents')
  }

  readByIdSpents(id: string | null) {
    const url =`${this.baseUrl}spents/${id}`
    this.result =  this.http.get(url)
  }

  createSpents(gastos: any){
    this.result = this.http.post<JSON>(this.baseUrl + 'spents/', gastos)
  }

  deleteSpents(id: number){
    const url =`${this.baseUrl}spents/${id}`
    this.result = this.http.delete(url)
  }

  // RECEITA
  listRevenues() {
    this.result = this.http.get(this.baseUrl + 'revenues/')
  }

  readByIdRevenues(id: string | null) {
    const url =`${this.baseUrl}revenues/${id}`
    this.result =  this.http.get(url)
  }

  createRevenues(gastos: any){
    this.result = this.http.post<JSON>(this.baseUrl + 'revenues/', gastos)
  }

  deleteRevenues(id: number){
    const url =`${this.baseUrl}revenues/${id}`
    this.result = this.http.delete(url)
  }

  // TRANSFERENCIAS
  listTransfers() {
    this.result = this.http.get(this.baseUrl + 'transfer/')
  }

  readByIdTransfers(id: string | null) {
    const url =`${this.baseUrl}transfer/${id}`
    this.result =  this.http.get(url)
  }

  createTransfers(gastos: any){
    this.result = this.http.post(this.baseUrl + 'transfer/', gastos)
  }

  deleteTransfers(id: number){
    const url =`${this.baseUrl}transfer/${id}`
    this.result = this.http.delete(url)
  }

  // GERAR JSON RECEITA/GASTOS
  treatDataSpentRevenue(input: any){
    return {account: input.id_account, value: input.value, category: input.id_category}
  }

  // GERAR JSON TRANSFERENCIAS
  treatDataTransfer(input: any){
    return {account_in: input.id_account_in, account_out: input.id_account_out, value: input.value, category: input.id_category}
  }

}
