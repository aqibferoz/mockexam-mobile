import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { ExamPreferencesPage } from '../exam-preferences/exam-preferences';

// Importing Providers
import {ApiProvider} from '../../providers/api/api';
import {AuthProvider} from '../../providers/auth/auth';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user={
    name:'',
    email:'',
    password:''
  }

  err='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthProvider, private api: ApiProvider) {
                if(localStorage.getItem('uid')) {
                  this.navCtrl.push(ExamPreferencesPage);
                }
              }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }
  ClickToForgotPage(){
    this.navCtrl.push(ForgotPasswordPage);
  }
  ClickToRegister(){
    this.navCtrl.push('RegisterPage');
  }
  ClickToLogin(){
    // console.log('Login Clicked');
    // this.navCtrl.push(ExamsPage);
    if(this.user.email !== '' && this.user.password !== ''){
      this.auth.login(this.user.email, this.user.password).then(resp=>{
        console.log(resp);
        // localStorage.setItem('data',resp.user.displayName);
        this.auth.saveToken(resp.user.uid);
        this.api.updateStudent(localStorage.getItem('uid'), {lastLogin:new Date()}).then(response=>{
         // this.router.navigate(['/dashboard']);
         this.navCtrl.push(ExamPreferencesPage);
        })
      },err => this.showErr(err.message))
    }
    //this.navCtrl.push()
  }

  showErr(msg){
    this.err = msg;
    setTimeout(()=> this.err = '' ,3000);
  }
}
