import { Component, OnInit } from '@angular/core';
import {DataService,Transactions} from '../services/data.service'
@Component({
  selector: 'app-team-transactions',
  templateUrl: './team-transactions.page.html',
  styleUrls: ['./team-transactions.page.scss'],
})
export class TeamTransactionsPage implements OnInit {



transactions:Transactions|null = null;
balance:number;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  submit(e) {
console.log(e);
this.data.getTeamlTransactions(e).subscribe(d=>{this.transactions=d
  this.balance=0
for (let i of d) {this.balance+=i.withdrawAmount;}
});
  }
}
