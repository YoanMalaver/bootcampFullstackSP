import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { Transaction } from '../models/transactions.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  public url: string = `${environment.ApiUrl}/api/accounts`;

  constructor(public http: HttpClient) {}

  //Obtener un solo cliente
  getTransactions(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.url}/${id}`);
  }
}
