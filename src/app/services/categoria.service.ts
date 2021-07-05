import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = 'http://path.com.br/category/'
  result: any

  constructor(private http: HttpClient) { }

  readById(id: string | null) {
    const url =`${this.baseUrl}${id}`
    this.result =  this.http.get(url)
  }

  create(nome: any){
    this.result = this.http.post(this.baseUrl, JSON.stringify(nome))
  }

  delete(id: number){
    const url =`${this.baseUrl}${id}`
    this.result = this.http.delete(url)
  }
  
}
