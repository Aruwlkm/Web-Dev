import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>(`${this.API}/products/`);
  }

  getCategories() {
    return this.http.get<any[]>(`${this.API}/categories/`);
  }
}