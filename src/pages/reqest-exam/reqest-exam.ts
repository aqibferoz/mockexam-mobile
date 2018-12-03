import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReqestExamPage');
  }
  ClickToExamsPage(){
    this.navCtrl.push(ExamsPage)
  }
  popUp() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Exam Category');

    alert.addInput({
      type: 'radio',
      label: 'Medical',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Engineering',
      value: 'blue',
      // checked: true
    });

  
    alert.addButton({
      text: 'Okay!',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }
}
