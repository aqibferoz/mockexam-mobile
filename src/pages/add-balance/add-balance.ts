import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalanceTransactionsPage } from '../balance-transactions/balance-transactions';
import { BankTransferPage } from '../bank-transfer/bank-transfer';

/**
 * Generated class for the AddBalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-balance',
  templateUrl: 'add-balance.html',
})
export class AddBalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBalancePage');
  }
  goBack(){
    this.navCtrl.push(BalanceTransactionsPage)
  }
  goToBankTransfer(){
    this.navCtrl.push(BankTransferPage)
  }
}
