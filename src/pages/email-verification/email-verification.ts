import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailVerificationSuccessPage } from '../email-verification-success/email-verification-success';
import { RegisterPage } from '../register/register';


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
  gotoNextField(nextElement){
    nextElement.setFocus();
}
}
