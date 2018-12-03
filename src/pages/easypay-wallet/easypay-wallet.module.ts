import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EasypayWalletPage } from './easypay-wallet';

@NgModule({
  declarations: [
    EasypayWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(EasypayWalletPage),
  ],
})
export class EasypayWalletPageModule {}
