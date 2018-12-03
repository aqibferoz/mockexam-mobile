import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';
import { BankInformationPage } from '../bank-information/bank-information';

/**
 * Generated class for the BankTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bank-transfer',
  templateUrl: 'bank-transfer.html',
})
export class BankTransferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankTransferPage');
  }
goBack(){
  this.navCtrl.push(AddBalancePage)
}
BankInfoPage(){
  this.navCtrl.push(BankInformationPage)
}
popUp(){
  let alert = this.alertCtrl.create({
    title: 'Account Information',
    message: "Only when we have your bank account information, we would be able to track transactions that you made to mockexam account and in that return add that balance to mockexams account. We won't have access to your bak account and this information will not be shared with anyone.",
    buttons: [
      {
        text: 'Okay',
        role: '',
        handler: () => {
          console.log('Okay clicked');
        }
      }
    ]
  });
  alert.present();
}
}
