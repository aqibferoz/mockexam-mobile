import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ExamsPage } from '../exams/exams';
import { ApiProvider } from '../../providers/api/api';
import { map } from 'rxjs/operators';
import { HomeExamsPage } from '../home-exams/home-exams';

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
  categorys: any;
  categoryName: string;
  examName: string;
  studentName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReqestExamPage');
    this.studentName = localStorage.getItem('name');
    this.api.getCategorys().pipe(map(
      list =>
        list.map(
          items => {
            console.log();
            return { id: items.payload.doc.id, ...items.payload.doc.data() }
          }
        )
    ))
      .subscribe(resp => {
        this.categorys = resp;
        // this.showSpinner = false;
        console.log(resp);
      })

  }
  onChangeMock(event) {
    this.categoryName = event;
    console.log(this.categoryName);
  }
  requestExam() {
    let e = {
      categoryName: this.categoryName,
      examName: this.examName
    }

    this.api.addRequestedExam(e).then(
      () => {
        this.categoryName = null;
        this.examName = null;
        this.navCtrl.push(HomeExamsPage)
      }
    )
  }

  ClickToExamsPage() {
    this.navCtrl.push(ExamsPage)
  }
  // popUp() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Exam Category');

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Medical',
  //     value: 'blue',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Engineering',
  //     value: 'blue',
  //     // checked: true
  //   });


  //   alert.addButton({
  //     text: 'Okay!',
  //     handler: data => {
  //       // this.testRadioOpen = false;
  //       // this.testRadioResult = data;
  //     }
  //   });
  //   alert.present();
  // }
}
