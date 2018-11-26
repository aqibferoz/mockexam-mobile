import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailVerificationPage } from './email-verification';

@NgModule({
  declarations: [
    EmailVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailVerificationPage),
  ],
})
export class EmailVerificationPageModule {}
