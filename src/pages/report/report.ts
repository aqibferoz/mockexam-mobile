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
  goToProfilePage() {
    this.navCtrl.push(HomeExamsPage)
  }
}
