import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultDetailsPage } from '../result-details/result-details';


// Importing Providers
import { ApiProvider } from '../../providers/api/api';
//import {AuthProvider} from '../../providers/auth/auth';
/**
 * Generated class for the ResultOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-overview',
  templateUrl: 'result-overview.html',
})
export class ResultOverviewPage {

  userExam: any;
  examResult: any;
  doughnutChartLabels: string[] = ['Correct Answers', 'Incorrect Answers', 'Unanswered Mcqs'];
  doughnutChartData: number[];
  doughnutChartType: string = 'doughnut';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api: ApiProvider) {
    this.userExam = this.navParams.get('userexamId');
    console.log(this.userExam);
  }

  ionViewDidLoad() {
    this.api.getUserexam(this.userExam)
      .subscribe(
        resp => {
          this.examResult = resp;
          this.doughnutChartData = [this.examResult.correct, this.examResult.incorrect, this.examResult.unanswered];
        });
  }

  changeTimeToHours(seconds) {
    return seconds / 3600;
  }


  // // Pie
  // public pieChartLabels:string[] = ['Correct answers', 'Incorrect answers', 'Unanswered'];
  // public pieChartData:number[] = [300, 500, 100];
  // public pieChartType:string = 'pie';

  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  goToResultDetailsPage() {
    this.navCtrl.push(ResultDetailsPage)
  }
}
