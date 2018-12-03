import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { BankTransferPage } from '../bank-transfer/bank-transfer';

@IonicPage()
@Component({
  selector: 'page-bank-information',
  templateUrl: 'bank-information.html',
})
export class BankInformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankInformationPage');
  }
  goBack(){
    this.navCtrl.push(BankTransferPage)
  }
  goBankTransferPage(){
    this.navCtrl.push(BankTransferPage)
  }
  popUp(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'AlBaraka Bank ',
      value: 'AlBaraka Bank',
    });
    alert.addInput({
      type: 'radio',
      label: 'Al habib Bank',
      value: 'blue',
      
    });
    alert.addInput({
      type: 'radio',
      label: 'Faysal Bank',
      value: 'blue',
    });
    alert.addInput({
      type: 'radio',
      label: 'Dubai Islamic bank',
      value: 'blue',
    });
    alert.addInput({
      type: 'radio',
      label: 'Meezan Bank',
      value: 'blue',
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }
}
