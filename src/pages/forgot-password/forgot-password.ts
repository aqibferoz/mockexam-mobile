import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
//import { ForgotPasswordCodePage } from '../forgot-password-code/forgot-password-code';


// Importing Providers
// import {ApiProvider} from '../../providers/api/api';
import {AuthProvider} from '../../providers/auth/auth';
//import { HomeExamsPage } from '../home-exams/home-exams';
//import { InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  ClickToForgotPasswordCodePage(email: string){
    // if (!this.resetpwdForm.valid){
    //   console.log(this.resetpwdForm.value);
    // } else {
      this.auth.resetPassword(email).then( () => {
        // this.navCtrl.setRoot(HomeExamsPage);
        // Setup Options
        // let options: InAppBrowserOptions ={
        //   zoom:'no'
        // }
        // // Opening a URL and returning InAppBrowser Object
        // this.inAppBrowser.create('https://gmail.com/','_self', options);
      })
      .catch((error) => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();

    //}
  }


    // this.auth.resetPassword(email);
    // this.navCtrl.push(ForgotPasswordCodePage);



}

