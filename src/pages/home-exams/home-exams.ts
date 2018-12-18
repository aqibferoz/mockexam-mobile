import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCouponPage } from '../add-coupon/add-coupon';
import { BalanceTransactionsPage } from '../balance-transactions/balance-transactions';
import { ExamsHistoryPage } from '../exams-history/exams-history';
import { ExamPreferencesPage } from '../exam-preferences/exam-preferences';
import { ReportPage } from '../report/report';
import { SignOutPage } from '../sign-out/sign-out';
import {map} from 'rxjs/operators';

// Importing Providers
import {ApiProvider} from '../../providers/api/api';
import {AuthProvider} from '../../providers/auth/auth';
import { ExamsDetailsUnpurchasedPage } from '../exams-details-unpurchased/exams-details-unpurchased';

/**
 * Generated class for the HomeExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-exams',
  templateUrl: 'home-exams.html',
})
export class HomeExamsPage {
// Declarations for Exam Tab //
student: any;
mocks: any;
categories: any;
userPref = new Array();
e: any;
sname;
//////////////////////////////////////////

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider, private api: ApiProvider) {

      // Get student to show on Profile page
      this.api.getStudent(this.auth.getToken())
      .subscribe(resp => {
        this.student = resp;
        // console.log(this.student);
        this.userPref = this.student.examPreference;
      });

     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeExamsPage');
    ///////////// Code to display Exams which are added from Preference////////////
    this.api.getMocks().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        this.e = data;
        //get exams
        let preference = false;
        let found = this.userPref.find(element => {
          return this.e.examId === element;
        });
        if (found) {
          preference = true;
        }
        return { id, preference, ...data };
      })
      )).subscribe(resp => {
      this.mocks = resp;
    });

    this.api.getExams().pipe(map(
      list => {
        return list.map(
          items => {
            const data = items.payload.doc.data();
            const id = items.payload.doc.id;
            let found = this.userPref.find(element => { return element === id; });
            let isPresent = false;
            if (found) {
              isPresent = true;
            }
            return { id, isPresent,...data };
          }
        )
      }
    )).subscribe(resp => {
      this.categories = resp;
      console.log(this.categories);
    });

    ///////////////////////////////////////////////////////////////////////////////
  }
  goExam(examId){
    console.log(examId);
    let passId = examId;
    this.navCtrl.push(ExamsDetailsUnpurchasedPage , {passId : passId})
  }

  goAddCouponPage(){
    this.navCtrl.push(AddCouponPage)
  }
  goBalancetransactionPage(){
    this.navCtrl.push(BalanceTransactionsPage)
  }
  goExamsHistoryPage(){
    this.navCtrl.push(ExamsHistoryPage)
  }
  ClickToExamsPreferencesPage(){
    this.navCtrl.push(ExamPreferencesPage)
  }
  goReportPage(){
    this.navCtrl.push(ReportPage)
  }
  goSignoutPage(){
    this.navCtrl.push(SignOutPage)
  }
}
