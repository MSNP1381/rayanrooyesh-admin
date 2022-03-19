import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamTransactionsPage } from './team-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TeamTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamTransactionsPageRoutingModule {}
