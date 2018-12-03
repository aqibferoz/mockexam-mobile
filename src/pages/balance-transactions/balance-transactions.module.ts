import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalanceTransactionsPage } from './balance-transactions';

@NgModule({
  declarations: [
    BalanceTransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(BalanceTransactionsPage),
  ],
})
export class BalanceTransactionsPageModule {}
