import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';
import { HomeExamsPage } from '../home-exams/home-exams';

/**
 * Generated class for the BalanceTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance-transactions',
  templateUrl: 'balance-transactions.html',
})
export class BalanceTransactionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalanceTransactionsPage');
  }
goBack(){
this.navCtrl.push(HomeExamsPage)
}
addBalance(){
  this.navCtrl.push(AddBalancePage)
}
}
