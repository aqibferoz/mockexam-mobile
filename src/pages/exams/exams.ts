import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReqestExamPage } from '../reqest-exam/reqest-exam';
import { HomePage } from '../home/home';

/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsPage');
  }
  ClickToRequestExamPage(){
    this.navCtrl.push(ReqestExamPage)
  }
  ClickToHomePage(){
    this.navCtrl.push(HomePage)
  }
}
