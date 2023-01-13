import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  idClient!: number;
  idAccount!: number;

  constructor() {}
}
