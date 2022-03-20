import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalTransactionsPageRoutingModule } from './total-transactions-routing.module';

import { TotalTransactionsPage } from './total-transactions.page';
import {TransactionId2StrPipe}from './custom.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalTransactionsPageRoutingModule
  ],
  declarations: [TotalTransactionsPage,TransactionId2StrPipe]
})
export class TotalTransactionsPageModule {}
