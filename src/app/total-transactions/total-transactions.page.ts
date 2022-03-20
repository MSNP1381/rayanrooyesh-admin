import { Component, OnInit } from '@angular/core';
import { DataService,Transactions } from '../services/data.service';

@Component({
  selector: 'app-total-transactions',
  templateUrl: './total-transactions.page.html',
  styleUrls: ['./total-transactions.page.scss'],
})
export class TotalTransactionsPage implements OnInit {
  private transactions: Transactions[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getTotalTransactions().subscribe(d => {this.transactions=d; console.warn('salam');});
  }

}
