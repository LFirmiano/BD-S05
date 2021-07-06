import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = 'http://localhost:8090/categories/'
  result: any

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.baseUrl)
  }

  // readById(id: string | null) {
  //   const url =`${this.baseUrl}${id}`
  //   this.result =  this.http.get(url)
  // }

  create(nome: any){
    return this.http.post(this.baseUrl, {name: nome})
  }

  delete(id: number | undefined){
    const url =`${this.baseUrl}${id}`
    return this.http.delete(url)
  }
  
}
