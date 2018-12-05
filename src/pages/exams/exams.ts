import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReqestExamPage } from '../reqest-exam/reqest-exam';
import {map} from 'rxjs/operators'
// Importing Providers
import {ApiProvider} from '../../providers/api/api';
import {AuthProvider} from '../../providers/auth/auth';
import { HomeExamsPage } from '../home-exams/home-exams';
import { ExamsHistoryPageModule } from '../exams-history/exams-history.module';

/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {

  student: any;
  mocks: any;
  categories: any;
  userPref = new Array();
  e: any;
  sname;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider, private api: ApiProvider) {
      this.api.getStudent(this.auth.getToken())
      .subscribe(resp => {
        this.student = resp;
        // console.log(this.student);
        this.userPref = this.student.examPreference;
      });
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsPage');
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

  }

  }

  // goExam(examId) {

  //   // this.router.navigate(['/dashboard/exam-details/' + examId]);

  // }

  // ClickToRequestExamPage(){
  //   this.navCtrl.push(ReqestExamPage)
  // }
  // ClickToHomePage(){
  //   this.navCtrl.push(HomeExamsPage)
  // }

