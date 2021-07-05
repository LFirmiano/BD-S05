import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  
  baseUrl = 'http://path.com.br/accounts/'
  result: any

  constructor(private http: HttpClient) { }

  list() {
    // this.result = this.http.get(this.baseUrl)
    return "oi"
  }

  readById(id: string | null) {
    const url =`${this.baseUrl}${id}`
    // this.result =  this.http.get(url)
    return url
  }

  create(nome: any){
    // this.result = this.http.post(this.baseUrl, {name: nome})
    return {name: nome}
  }

  delete(id: number){
    const url =`${this.baseUrl}${id}`
    // this.result = this.http.delete(url)
  }


}
