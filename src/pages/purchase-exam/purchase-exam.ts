import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';
import { AddCouponPage } from '../add-coupon/add-coupon';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { map } from 'rxjs/operators';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private api: ApiProvider,
    private auth: AuthProvider) {
  }
  student: any;
  mockExamId;
  mock;
  mocks;
  purchaseButton: boolean = false;
  ionViewDidLoad() {
    this.mockExamId = this.navParams.get('mockId');
    console.log(this.mockExamId);
    console.log('ionViewDidLoad PurchaseExamPage');
    this.api.getStudent(this.auth.getToken()).subscribe(resp => {
      this.student = resp;
      console.log(this.student);
    });
    this.api.getMock(this.mockExamId).subscribe(res => {
      console.log(res);
      this.mock = res;
      if (this.student.balance > this.mock.priceOfSeries) {
        this.purchaseButton = true;
      }
    })
  }
  goAddBalance() {
    this.navCtrl.push(AddCouponPage)
  }
  goAddCoupon() {
    this.navCtrl.push(AddCouponPage)
  }
  proceed() {
    const confirm = this.alertCtrl.create({
      title: 'Congratulations',
      message: "You have successfully purchased the exam. Start preparing the subject by taking the exam now.",
      buttons: [
        
        {
          text: 'Take exam now',
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
