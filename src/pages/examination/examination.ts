import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SuggestCorrectionPage } from '../suggest-correction/suggest-correction';
//import { SimpleTimer } from 'ng2-simple-timer';

// Importing Providers
import {ApiProvider} from '../../providers/api/api';
import { ResultOverviewPage } from '../result-overview/result-overview';

/**
 * Generated class for the ExaminationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-examination',
  templateUrl: 'examination.html',
})
export class ExaminationPage {
  userexam;
  currentMcq
  mcqs;
  counter;
  userexamId;
  showCorrect = false;
  timer;
  //window: WindowEventHandlers;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private api: ApiProvider ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExaminationPage');
    window.addEventListener('beforeunload', (event)=>{
      // console.log(event);
      this.updateUserExam();
      console.log('leaving with timer value')
    });
    this.userexamId = this.navParams.get('send');
      console.log(this.userexamId + 'This is the user exam Id');
     this.getUserExam(this.userexamId);
  }

  calculateTimeTaken(){
    return this.userexam.timeAllowed - this.userexam.timer;
  }

  updateUserExam(){
    this.userexam.timer = this.timer;
    this.userexam.timeTaken = this.calculateTimeTaken();
    return this.api.updateUserexam(this.userexamId, this.userexam);
  }

  onEvent(value: any) {
    // console.log('event', value);
    this.timer = value.left / 1000;
    // console.log(this.timer);
    setTimeout(()=>{
      this.counter--;
    },1000)
  }

  callback() {
    this.counter++;
  }

  getUserExam(id){
    return  this.api.getUserexam(id).subscribe(response=>{
      this.userexam = response;
      console.log(this.userexam);
      this.mcqs = this.userexam.mcqs;
      this.currentMcq = this.mcqs[this.userexam.currentIndex];
      this.counter = this.userexam.timer;
    });
  }

  onSelect(option){
    console.log(option);
    // this.showCorrect = true;
    this.userexam.mcqs[this.userexam.currentIndex].answer = option;
    this.checkCorrectness();
    this.updateUserExam();
  }

  onNext(){
    //update Index
    if(this.userexam.currentIndex  == this.userexam.mcqs.length -1){
      //on final MCQ
    }else if(this.userexam.currentIndex !== this.userexam.totalMcqs){
      this.userexam.currentIndex++;
      this.updateIndex();
    }
  }

  onPrevious(){
    if(this.userexam.currentIndex == 0){

    }else{
      this.userexam.currentIndex--;
      this.updateIndex();
    }
  }

  saveTest(){
    // time to submit this userexam and present the result
      this.userexam.submitted = false;
      this.userexam.completedTime = new Date();
      if(this.userexam.unanswered <=0){
        this.userexam.status = 'incomplete';
      }
      this.updateUserExam().then(()=>{
        // reload the data...
         // this.router.navigate(['dashboard/result/'+this.userexamId]);
          console.log('data reloading...');
      });
    }

  submitTest(){
  // time to submit this userexam and present the result
    this.userexam.submitted = true;
    this.userexam.completedTime = new Date();
      this.userexam.status = 'complete';
    this.updateUserExam().then(()=>{
      // reload the data...
     // this.router.navigate(['dashboard/viewresult/'+this.userexamId]);
     this.navCtrl.push(ResultOverviewPage,{userexamId: this.userexamId});
      console.log('data reloading...');
    });
  }

  updateIndex(){
    this.api.updateUserexam(this.userexamId, {
      currentIndex: this.userexam.currentIndex
    })
  }

  bookmarkMcq(mcq){
    this.api.addStudentBookmark(mcq).then(res=>{
      console.log('bookmarkerd');
    });
  }

  checkCorrectness(){
    // if(this.userexam.mcqs[this.userexam.currentIndex].answer === ''){
    //compare answer == correct
    if(this.userexam.mcqs[this.userexam.currentIndex].answer === this.userexam.mcqs[this.userexam.currentIndex].solution){
      //we got the solution.....
      this.userexam.correct ++;
      this.userexam.unanswered--;
      console.log(`Correct Answers: ${this.userexam.correct} and Incorrect: ${this.userexam.incorrect} , Unanswered: ${this.userexam.unanswered}`)
    }else if(this.userexam.mcqs[this.userexam.currentIndex].answer !== this.userexam.mcqs[this.userexam.currentIndex].solution){
      this.userexam.incorrect++;
      this.userexam.unanswered--;
      console.log(`Correct Answers: ${this.userexam.correct} and Incorrect: ${this.userexam.incorrect} , Unanswered: ${this.userexam.unanswered}`)
    }
  }

  checkIfCorrect(){
    if(this.userexam.mcqs[this.userexam.currentIndex].answer === this.userexam.mcqs[this.userexam.currentIndex].solution){
      return true;
    } else {
      return false;
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
  goBack(){
    const confirm = this.alertCtrl.create({
      title: 'Leave Exam',
      message: "You haven't completed the exam that you are trying to leave. You can always come back and start the exam again from the beginning or you can pause the exam here to continue later",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue Later',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  goSuggestionPage(){
    this.navCtrl.push(SuggestCorrectionPage)
  }

  submitExam(){
    const confirm = this.alertCtrl.create({
      title: 'Submit Exam',
      message: "You haven't completed the exam that you are trying to submit. All the unatempted questions will be treated as 'unanswered' and won't add to your final scores of the exam.",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit anyway',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
