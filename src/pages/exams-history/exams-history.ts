import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ExamsHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams-history',
  templateUrl: 'exams-history.html',
})
export class ExamsHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsHistoryPage');
  }
  alertBox(){
    let alert = this.alertCtrl.create({
      title: 'Welcome back',
      message: "Looks like you are ready to continue the exam that you previously paused. Press 'Cancel' if you want to resume the exam later or you can resume the exam now by pressing 'Continue'",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
}
}