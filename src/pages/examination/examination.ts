import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SuggestCorrectionPage } from '../suggest-correction/suggest-correction';

/**
 * Generated class for the ExaminationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examination',
  templateUrl: 'examination.html',
})
export class ExaminationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExaminationPage');
  }
  goBack(){
    const confirm = this.alertCtrl.create({
      title: 'Leave Exam',
      message: "You haven't completed the exam that you are trying to leave. You can always come back and start the exam again from the beginning or you can pause the exam here to continue later",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue Later',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  goSuggestionPage(){
    this.navCtrl.push(SuggestCorrectionPage)
  }

  submitExam(){
    const confirm = this.alertCtrl.create({
      title: 'Submit Exam',
      message: "You haven't completed the exam that you are trying to submit. All the unatempted questions will be treated as 'unanswered' and won't add to your final scores of the exam.",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit anyway',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
