import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankTransferPage } from './bank-transfer';

@NgModule({
  declarations: [
    BankTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(BankTransferPage),
  ],
})
export class BankTransferPageModule {}
