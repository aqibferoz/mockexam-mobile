import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseExamPage } from './purchase-exam';

@NgModule({
  declarations: [
    PurchaseExamPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseExamPage),
  ],
})
export class PurchaseExamPageModule {}
