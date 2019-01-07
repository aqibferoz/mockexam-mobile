import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { map } from 'rxjs/operators';

// Importing Providers
import { ApiProvider } from "../../providers/api/api";
import { AuthProvider } from "../../providers/auth/auth";
import { ExamsPage } from "../exams/exams";
import { ReqestExamPage } from "../reqest-exam/reqest-exam";
import { HomeExamsPage } from "../home-exams/home-exams";
import { LoginPage } from "../login/login";

/**
 * Generated class for the ExamPreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-exam-preferences",
  templateUrl: "exam-preferences.html"
})
export class ExamPreferencesPage {
  user: any;
  userExamPref = new Array();
  categories: any;
  loading: any;
  mocks: any;
  constructor(private navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider, private api: ApiProvider, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

  }

  ionViewDidLoad() {
    if (!this.auth.getToken()) {
      this.navCtrl.push(LoginPage);
    }
    // console.log('ionViewDidLoad ExamPreferencesPage');
    // read current user from firebase
    this.api.getStudent(this.auth.getToken())
      .subscribe(resp => {
        this.user = resp;
        this.userExamPref = this.user.examPreference;
      });

    // get all exams from the firebase and check the preference
    this.api.getExams().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        let preferances = false;
        let buttonText = 'Add Exam';
        let found = this.userExamPref.find(element => { return element === id })
        if (found) {
          buttonText = 'Exam Added';
          preferances = true;
        }
        return { id, preferances, buttonText, ...data };
      }))
    ).subscribe(resp => {
      this.mocks = resp; /*  user -groupBy Filter to play with this */
    });

    // get all the categories present in firestore
    this.api.getAllCategories().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(resp => {
      this.categories = resp;
      this.loading.dismiss();
    });

  }



  addExam(x) {
    if (this.userExamPref.find(exam => exam == x.id)) {
      let index = this.userExamPref.findIndex(exam => exam == x.id);
      this.userExamPref.splice(index, 1);
      this.api.updateStudent(this.auth.getToken(), { examPreference: this.userExamPref });
      this.api.getExams().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          let preferances = false;
          let buttonText = 'Add Exam';

          // check user exam preference array wheter the exam exist in user preference if yes then remove from preference

          let found = this.userExamPref.find(element => { return element === id })
          if (found) {
            buttonText = 'Exam Added';
            preferances = true;
          }
          return { id, preferances, buttonText, ...data };
        }))
      ).subscribe(resp => {
        this.mocks = resp; /*  user -groupBy Filter to play with this */
        this.loading.dismiss();
      });

    } else {
      this.userExamPref.push(x.id);
      if (this.userExamPref.length != 0 && this.userExamPref != undefined) {
        this.api.updateStudent(this.auth.getToken(), { examPreference: this.userExamPref });

        this.api.getExams().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            let preferances = false;
            let buttonText = "Add Exam";
            let found = this.userExamPref.find(element => {
              return element === id;
            });
            if (found) {
              buttonText = "Exam Added";
              preferances = true;
            }
            return { id, preferances, buttonText, ...data };
          })
          )
        )
          .subscribe(resp => {
            this.mocks = resp; /*  user -groupBy Filter to play with this */
          });

        // get all the categories present in firestore
        this.api
          .getAllCategories()
          .pipe(
            map(actions =>
              actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              })
            )
          )
          .subscribe(resp => {
            this.categories = resp;
          });
      }

    }
  }

  saveExam() {
    this.navCtrl.push(ExamsPage);
  }

  goBack() { }
  ClickToRequestExamPage() {
    this.navCtrl.push(ReqestExamPage);
  }
  ClickToExamsPage() {
    this.navCtrl.push(HomeExamsPage);
  }
}
