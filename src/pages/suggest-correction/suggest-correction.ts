import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeExamsPage } from '../home-exams/home-exams';

/**
 * Generated class for the SuggestCorrectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggest-correction',
  templateUrl: 'suggest-correction.html',
})
export class SuggestCorrectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestCorrectionPage');
  }
  goBack(){
    this.navCtrl.push(HomeExamsPage)
  }

}
