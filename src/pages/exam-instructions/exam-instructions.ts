import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExaminationPage } from '../examination/examination';

/**
 * Generated class for the ExamInstructionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam-instructions',
  templateUrl: 'exam-instructions.html',
})
export class ExamInstructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamInstructionsPage');
  }
  goToExaminationPage(){
    this.navCtrl.push(ExaminationPage)
  }
}
