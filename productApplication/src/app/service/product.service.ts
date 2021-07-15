import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

const baseUrl = 'http://localhost:3000/app/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl);
  }

  get(id: string | null):Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: { name: string; discription:string;price: string; }):Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: any): Observable<Product> {
    return this.http.put<Product>(`${baseUrl}/${id}`, data)
  }

  delete(id: number | undefined):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll():Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any) {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
