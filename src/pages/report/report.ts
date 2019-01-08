import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api: ApiProvider, private auth: AuthProvider) {
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
