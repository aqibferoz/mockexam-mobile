import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

// Importing Providers
import {ApiProvider} from '../../providers/api/api';
import {AuthProvider} from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user={
    name:'',
    email:'',
    password:'',
    dob:'',
    gender:'',
    cnic:'',
    registeration_no:'',
    phone:'',
    examPreference: [],
    examPurchased:[]

  }

  err='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
               private auth: AuthProvider, private api: ApiProvider) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }
  ClickToLogin(){
    this.navCtrl.push(LoginPage);
  }
  ClickToCreate(){
    if(this.user.email !== '' && this.user.password !== ''){
      this.auth.signup(this.user.email, this.user.password).then(resp=>{
        this.auth.saveToken(resp.user.uid);
        this.api.addStudent(localStorage.getItem('uid'), this.user).then(response=>{
         // this.router.navigate(['/login']);
         this.navCtrl.push(LoginPage);
        })
      },err => this.showErr(err.message))
    }

  }

  showErr(msg){
    this.err = msg;
    setTimeout(()=> this.err = '' ,3000);
  }
}
