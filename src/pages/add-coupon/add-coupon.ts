import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeExamsPage } from '../home-exams/home-exams';

/**
 * Generated class for the AddCouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-coupon',
  templateUrl: 'add-coupon.html',
})
export class AddCouponPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCouponPage');
  }
  goBack(){
    this.navCtrl.push(HomeExamsPage);
  }
}
