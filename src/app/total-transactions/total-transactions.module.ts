import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalTransactionsPageRoutingModule } from './total-transactions-routing.module';

import { TotalTransactionsPage } from './total-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalTransactionsPageRoutingModule
  ],
  declarations: [TotalTransactionsPage]
})
export class TotalTransactionsPageModule {}
