import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBalancePage } from './add-balance';

@NgModule({
  declarations: [
    AddBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(AddBalancePage),
  ],
})
export class AddBalancePageModule {}
