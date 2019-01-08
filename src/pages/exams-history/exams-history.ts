import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { map } from 'rxjs/operators';
import { ResultOverviewPage } from '../result-overview/result-overview';

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
  userexams: any;
  userexamsIncomplete: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private api: ApiProvider,
    private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsHistoryPage');
    this.api.getUserexamTakenCompleted(this.auth.getToken()).pipe(map(
      list => list.map(
        items => {
          const data = items.payload.doc.data();
          const id = items.payload.doc.id;
          return { id, ...data };
        }
      ))).subscribe(
        resp => {
          this.userexams = resp;
          console.log(this.userexams);

        }
      );

    this.api.getUserexamTakenIncomplete(this.auth.getToken()).pipe(map(
      list => list.map(
        items => {
          const data = items.payload.doc.data();
          const id = items.payload.doc.id;
          return { id, ...data };
        }
      ))).subscribe(
        resp => {
          this.userexamsIncomplete = resp;
          console.log(this.userexams);
        }
      );
  }
  viewresult(id) {
    this.navCtrl.push(ResultOverviewPage, { userexamId: id });
  }
  alertBox() {
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