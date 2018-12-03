import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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

    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
