import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamTransactionsPageRoutingModule } from './team-transactions-routing.module';

import { TeamTransactionsPage } from './team-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamTransactionsPageRoutingModule
  ],
  declarations: [TeamTransactionsPage]
})
export class TeamTransactionsPageModule {}
