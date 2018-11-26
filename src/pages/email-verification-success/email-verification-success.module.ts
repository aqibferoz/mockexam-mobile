import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailVerificationSuccessPage } from './email-verification-success';

@NgModule({
  declarations: [
    EmailVerificationSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailVerificationSuccessPage),
  ],
})
export class EmailVerificationSuccessPageModule {}
