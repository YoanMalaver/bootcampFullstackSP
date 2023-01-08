import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public url: string = `${environment.ApiUrl}/api/products`;
  public oculto: string = 'oculto';
  constructor(public http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  hideModal() {
    this.oculto = 'oculto';
  }

  showModal() {
    this.oculto = '';
  }
}
