import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultDetailsPage } from '../result-details/result-details';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

// Pie
public pieChartLabels:string[] = ['Correct answers', 'Incorrect answers', 'Unanswered'];
public pieChartData:number[] = [300, 500, 100];
public pieChartType:string = 'pie';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

goToResultDetailsPage(){
  this.navCtrl.push(ResultDetailsPage)
}
}
