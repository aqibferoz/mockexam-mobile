import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ExamInstructionsPage } from '../exam-instructions/exam-instructions';
import { PurchaseExamPage } from '../purchase-exam/purchase-exam';

// Importing Providers
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { map } from 'rxjs/operators';
import { HomeExamsPage } from '../home-exams/home-exams';

/**
 * Generated class for the ExamsDetailsUnpurchasedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams-details-unpurchased',
  templateUrl: 'exams-details-unpurchased.html',
})
export class ExamsDetailsUnpurchasedPage {

  examName: string;
  mockId: string;
  student: any;
  examPurchased = new Array();
  mockData: any;
  mocks: any;
  mock: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider, private api: ApiProvider, private alertCtrl: AlertController) {
    ///////////////Taking Id from previous Page///////////////////////////
    this.api.getStudent(this.auth.getToken())
      .subscribe(resp => {
        this.student = resp;
        this.examPurchased = this.student.examPurchased;
      });

    this.mockId = this.navParams.get('passId');
    console.log(this.mockId)

    this.api.getMocksExamById(this.mockId).pipe(map(
      actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        this.mockData = data;
        this.examPurchased.filter(element => {
          if (element === this.mockData.mockId) {
            this.mockData.free = true;
          }
        })
        return { id, ...this.mockData };
      }))
    ).subscribe(response => {
      this.mocks = response;
    });
    // });
    //////////////////////////////////////////
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsDetailsUnpurchasedPage');

    this.api.getMock(this.mockId)
      .subscribe(resp => {
        this.mock = resp;
        this.examName = this.mock.examName;
        console.log(this.mock);
        console.log(this.examName);
      })
  }
  goExamInstructionsPage(mockId, free) {
    if (free) {
      console.log(mockId);
      this.navCtrl.push(ExamInstructionsPage, { mockId: mockId })
    } else {
      const confirm = this.alertCtrl.create({
        title: 'Purchase Exam',
        message: "You havn't purchased the exam yet,",
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Buy now',
            handler: () => {
              console.log('Agree clicked');
              this.navCtrl.push(PurchaseExamPage, { mockId: this.mockId });
            }
          }
        ]
      });
      confirm.present();
      console.log('Purchase the exam first!');
    }
  }


  buyNow() {
    console.log("buynow");
    console.log(this.mockId);

  }
  goBack() {
    this.navCtrl.push(HomeExamsPage);
  }
}
