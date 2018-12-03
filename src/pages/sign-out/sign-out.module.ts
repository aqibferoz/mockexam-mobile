import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignOutPage } from './sign-out';

@NgModule({
  declarations: [
    SignOutPage,
  ],
  imports: [
    IonicPageModule.forChild(SignOutPage),
  ],
})
export class SignOutPageModule {}
