import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-details',
  templateUrl: 'result-details.html',
})
export class ResultDetailsPage {

  visible=true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultDetailsPage');
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

expand(){
  !this.visible;
}
}
