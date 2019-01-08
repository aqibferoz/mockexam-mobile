import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';
import { HomeExamsPage } from '../home-exams/home-exams';
import { AddCouponPage } from '../add-coupon/add-coupon';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private api: ApiProvider,
    private auth: AuthProvider) {
  }
  student: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad BalanceTransactionsPage');
    this.api.getStudent(this.auth.getToken()).subscribe(resp => {
      this.student = resp;
      console.log(this.student);
    });
  }
  goBack() {
    this.navCtrl.push(HomeExamsPage)
  }
  addBalance() {
    this.navCtrl.push(AddCouponPage)
  }
}
