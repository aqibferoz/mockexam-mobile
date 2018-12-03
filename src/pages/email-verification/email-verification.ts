import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailVerificationSuccessPage } from '../email-verification-success/email-verification-success';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the EmailVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-verification',
  templateUrl: 'email-verification.html',
})
export class EmailVerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailVerificationPage');
  }
  ClickToEmailVerification(){
    this.navCtrl.push(EmailVerificationSuccessPage)
  }
  goBack(){
    this.navCtrl.push(RegisterPage);
  }
}
