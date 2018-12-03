import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankInformationPage } from './bank-information';

@NgModule({
  declarations: [
    BankInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(BankInformationPage),
  ],
})
export class BankInformationPageModule {}
