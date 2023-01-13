import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/shared/models/transactions.model';

import { DataService } from 'src/app/shared/services/data.service';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'app-bankingtransactions',
  templateUrl: './bankingtransactions.component.html',
  styleUrls: ['./bankingtransactions.component.scss'],
})
export class BankingtransactionsComponent implements OnInit {
  // load: Client = new Client();
  transactions: Transaction = new Transaction();

  constructor(
    private _router: Router,
    public _dataService: DataService,
    private _transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this._transactionService
      .getTransactions(this._dataService.idAccount)
      .subscribe((resp) => console.log(resp.transactions));
    this._transactionService
      .getTransactions(this._dataService.idAccount)
      .subscribe((resp) => (this.transactions = resp));
  }

  goBack(id: number) {
    this._router.navigate(['/manage-client', id]);
  }
  //getTransactions
}
