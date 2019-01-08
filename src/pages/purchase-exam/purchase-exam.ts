import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AddBalancePage } from '../add-balance/add-balance';
import { AddCouponPage } from '../add-coupon/add-coupon';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { map } from 'rxjs/operators';
import { ExamsDetailsUnpurchasedPage } from '../exams-details-unpurchased/exams-details-unpurchased';

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
    private toastCtrl: ToastController,
    private api: ApiProvider,
    private auth: AuthProvider) {
  }
  student: any;
  mockExamId;
  mock;
  examPurchased = new Array();
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
      if (this.student.balance >= this.mock.priceOfSeries) {
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
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.examPurchased.push(this.mockExamId);
            this.api.updateStudent(this.auth.getToken(), { examPurchased: this.examPurchased, balance: this.student.balance - this.mock.priceOfSeries })
              .then(() => {
                const success = this.toastCtrl.create({
                  message: "You have successfully purchased the exam. Start preparing the subject by taking the exam now.",
                  duration: 6000,
                  position: 'bottom'
                });
                success.present();
                this.navCtrl.push(ExamsDetailsUnpurchasedPage, { passId: this.mockExamId });
              })
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    confirm.present();

    // this.navCtrl.push(ExamsDetailsUnpurchasedPage, { mockId: this.mockExamId });


  }
}
