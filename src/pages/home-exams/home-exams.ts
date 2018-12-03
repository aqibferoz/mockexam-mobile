import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCouponPage } from '../add-coupon/add-coupon';
import { BalanceTransactionsPage } from '../balance-transactions/balance-transactions';
import { ExamsHistoryPage } from '../exams-history/exams-history';
import { ExamPreferencesPage } from '../exam-preferences/exam-preferences';
import { ReportPage } from '../report/report';
import { SignOutPage } from '../sign-out/sign-out';

/**
 * Generated class for the HomeExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-exams',
  templateUrl: 'home-exams.html',
})
export class HomeExamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeExamsPage');
  }
  goAddCouponPage(){
    this.navCtrl.push(AddCouponPage)
  }
  goBalancetransactionPage(){
    this.navCtrl.push(BalanceTransactionsPage)
  }
  goExamsHistoryPage(){
    this.navCtrl.push(ExamsHistoryPage)
  }
  goExamPreferencesPage(){
    this.navCtrl.push(ExamPreferencesPage)
  }
  goReportPage(){
    this.navCtrl.push(ReportPage)
  }
  goSignoutPage(){
    this.navCtrl.push(SignOutPage)
  }
}
