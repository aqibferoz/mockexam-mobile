import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';
import { AddCouponPage } from '../add-coupon/add-coupon';

/**
 * Generated class for the PurchaseExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-exam',
  templateUrl: 'purchase-exam.html',
})
export class PurchaseExamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseExamPage');
  }
  goAddBalance(){
    this.navCtrl.push(AddBalancePage)
  }
  goAddCoupon(){
    this.navCtrl.push(AddCouponPage)
  }
}
