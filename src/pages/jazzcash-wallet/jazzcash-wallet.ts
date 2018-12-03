import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';

/**
 * Generated class for the JazzcashWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jazzcash-wallet',
  templateUrl: 'jazzcash-wallet.html',
})
export class JazzcashWalletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JazzcashWalletPage');
  }
  goBack(){
    this.navCtrl.push(AddBalancePage)
  }
  goAddBalancePage(){
    this.navCtrl.push(AddBalancePage)
  }
}
