import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseExamPage');
  }
  goAddBalance(){
    this.navCtrl.push(AddCouponPage)
  }
  goAddCoupon(){
    this.navCtrl.push(AddCouponPage)
  }
  proceed(){
    const confirm = this.alertCtrl.create({
      title: 'Congratulations',
      message: "You havn't purchased the exam yet,",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy now',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(PurchaseExamPage)
          }
        }
      ]
    });
    confirm.present();
  }
}
