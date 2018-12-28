import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the ForgotPasswordCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password-code',
  templateUrl: 'forgot-password-code.html',
})
export class ForgotPasswordCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordCodePage');
  }

  resetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
  gotoNextField(nextElement){
    nextElement.setFocus();
}
}
