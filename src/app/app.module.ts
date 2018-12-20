import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
 import {NgPipesModule} from 'ngx-pipes';

// FireBase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Providers
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
// import {InAppBrowser} from '@ionic-native/in-app-browser'

import { MyApp } from './app.component';
import { RegisterPageModule } from '../pages/register/register.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from '../pages/login/login.module';
import { ForgotPasswordCodePageModule } from '../pages/forgot-password-code/forgot-password-code.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { ResetPasswordSuccessPageModule } from '../pages/reset-password-success/reset-password-success.module';
import { ExamsPageModule } from '../pages/exams/exams.module';
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { ReqestExamPageModule } from '../pages/reqest-exam/reqest-exam.module';
import { EmailVerificationPageModule } from '../pages/email-verification/email-verification.module';
import { EmailVerificationSuccessPageModule } from '../pages/email-verification-success/email-verification-success.module';
import { HomeExamsPageModule } from '../pages/home-exams/home-exams.module';
import { AddCouponPageModule } from '../pages/add-coupon/add-coupon.module';
import { BalanceTransactionsPageModule } from '../pages/balance-transactions/balance-transactions.module';
import { ExamsHistoryPageModule } from '../pages/exams-history/exams-history.module';
import { ExamPreferencesPageModule } from '../pages/exam-preferences/exam-preferences.module';
import { ReportPageModule } from '../pages/report/report.module';
import { SignOutPageModule } from '../pages/sign-out/sign-out.module';
import { AddBalancePageModule } from '../pages/add-balance/add-balance.module';
import { BankTransferPageModule } from '../pages/bank-transfer/bank-transfer.module';
import { BankInformationPageModule } from '../pages/bank-information/bank-information.module';
import { SuggestCorrectionPageModule } from '../pages/suggest-correction/suggest-correction.module';
import { EasypayWalletPageModule } from '../pages/easypay-wallet/easypay-wallet.module';
import { ExamsDetailsUnpurchasedPageModule } from '../pages/exams-details-unpurchased/exams-details-unpurchased.module';
import { ExamInstructionsPageModule } from '../pages/exam-instructions/exam-instructions.module';
import { PurchaseExamPageModule } from '../pages/purchase-exam/purchase-exam.module';
import { ExaminationPageModule } from '../pages/examination/examination.module';
import { ResultOverviewPageModule } from '../pages/result-overview/result-overview.module';

import { ChartsModule } from 'ng2-charts';
import { ResultDetailsPageModule } from '../pages/result-details/result-details.module';






export const firebaseConfig = {
  apiKey: 'AIzaSyCltNYHGUWtFS3cx3OOC4mOhL1eYZ5wd_0',
    authDomain: 'mockexam-2d625.firebaseapp.com',
    databaseURL: 'https://mockexam-2d625.firebaseio.com',
    projectId: 'mockexam-2d625',
    storageBucket: 'mockexam-2d625.appspot.com',
    messagingSenderId: '242926671154'
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    RegisterPageModule,
    LoginPageModule,
    ForgotPasswordCodePageModule,
    ResetPasswordPageModule,
    ResetPasswordSuccessPageModule,
    ExamsPageModule,
    ForgotPasswordPageModule,
    ReqestExamPageModule,
    EmailVerificationPageModule,
    EmailVerificationSuccessPageModule,
    HomeExamsPageModule,
    AddCouponPageModule,
    BalanceTransactionsPageModule,
    ExamsHistoryPageModule,
    ExamPreferencesPageModule,
    ReportPageModule,
    SignOutPageModule,
    AddBalancePageModule,
    BankTransferPageModule,
    BankInformationPageModule,
    SuggestCorrectionPageModule,
    EasypayWalletPageModule,
    ExamsDetailsUnpurchasedPageModule,
    ExamInstructionsPageModule,
    PurchaseExamPageModule,
    ExaminationPageModule,
    ResultOverviewPageModule,
    ResultDetailsPageModule,
    NgPipesModule,
    ChartsModule,


    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    AuthProvider,
    // InAppBrowser

  ]
})
export class AppModule {}
