import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExaminationPage } from '../examination/examination';


// Importing Providers
import {ApiProvider} from '../../providers/api/api';
//import {AuthProvider} from '../../providers/auth/auth';
import {map} from 'rxjs/operators';
/**
 * Generated class for the ExamInstructionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// const reducer = (accumulator, currentValue) => accumulator + currentValue.marks;

@IonicPage()
@Component({
  selector: 'page-exam-instructions',
  templateUrl: 'exam-instructions.html',
})
export class ExamInstructionsPage {
  mockExamId: string;
  mockExam: any;
  mcqs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamInstructionsPage');
    this.mockExamId = this.navParams.get('mockId');
    console.log(this.mockExamId);
    // this.route.params.subscribe(resp=>{
      //this.mockExamId = resp.id;
      this.api.getMcqsByMockExamId(this.mockExamId).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          const answer = '';
          const bookmarked = false;
        //  const correct = true;
          return { id, ...data, answer, bookmarked };
        })
        )).subscribe(mcqsData => {
          this.mcqs = mcqsData;
        });
   // });
  }

  startExam(){

    let mockExamId = this.mockExamId;
    // this is where everything happens for starting an exam....
    this.api.getMockExam(mockExamId).subscribe(resp=>{  // here i have the mockData(chapter) + subjectDate
      console.log(resp);
      this.mockExam = resp;
          // let totalMarks = this.mcqs.reduce(reducer);
          let data= {
            totalMcqs:this.mcqs.length,
            totalMarks:this.mcqs.length,  /* to be fixed */
            correct: 0,
            submitted:false,
            incorrect:0,
            unanswered:this.mcqs.length,
            timestamp: new Date(),
            currentIndex:0,
            timeAllowed:3600,
            timer:3600,
            timeTaken:0,
            status:'incomplete',
            mcqs: this.mcqs,
            mockExamId: mockExamId,
            mockExamName: this.mockExam.mockExamName,
            examId: this.mockExam.examId,
            examName: this.mockExam.examName,
            userId: localStorage.getItem('uid')
          }
          //time to save this
          this.api.addUserexam(data).then(ref=>{
            //this.router.navigate(['/dashboard/exam/'+ref.id]);
            let send = ref.id;
            this.navCtrl.push(ExaminationPage , {send : send});
          });
        });
    }

  goToExaminationPage(){
    this.navCtrl.push(ExaminationPage)
  }
}
