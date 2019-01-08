import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomeExamsPage } from '../home-exams/home-exams';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  student: any;
  report;
  toast:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api: ApiProvider, private auth: AuthProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    this.student = localStorage.getItem('name');
  }
  goBack() {
    this.navCtrl.push(HomeExamsPage)
  }
  Report() {
    if (this.report == null) {
      console.log('please fill the field');

      this.toast = this.toastCtrl.create({
        message: 'Nothing is written in the report',
        duration: 3000,
        position: 'bottom'
      });
      this.toast.present();
    }
    else {
      let e = {
        categoryName: this.report,
        studentName: this.student,
        userId: localStorage.getItem('uid')
      }

      this.api.addReport(e).then(
        () => {
          this.report = null;
          this.navCtrl.push(HomeExamsPage)
        }
      )
    }
  }
}
