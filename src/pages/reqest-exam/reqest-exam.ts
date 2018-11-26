import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamsPage } from '../exams/exams';

/**
 * Generated class for the ReqestExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reqest-exam',
  templateUrl: 'reqest-exam.html',
})
export class ReqestExamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReqestExamPage');
  }
  ClickToExamsPage(){
    this.navCtrl.push(ExamsPage)
  }
}
