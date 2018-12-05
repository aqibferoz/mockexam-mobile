import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamInstructionsPage } from '../exam-instructions/exam-instructions';
import { PurchaseExamPage } from '../purchase-exam/purchase-exam';

/**
 * Generated class for the ExamsDetailsUnpurchasedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams-details-unpurchased',
  templateUrl: 'exams-details-unpurchased.html',
})
export class ExamsDetailsUnpurchasedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsDetailsUnpurchasedPage');
  }
  goExamInstructionsPage(){
    this.navCtrl.push(ExamInstructionsPage)
  }
  
  buyNow(){
    this.navCtrl.push(PurchaseExamPage)
  }
}
