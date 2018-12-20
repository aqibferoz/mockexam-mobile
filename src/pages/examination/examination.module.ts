import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExaminationPage } from './examination';
import { SimpleTimer } from 'ng2-simple-timer';
import { CountdownModule } from 'ngx-countdown';
@NgModule({
  declarations: [
    ExaminationPage,
  ],
  imports: [
    IonicPageModule.forChild(ExaminationPage),
    CountdownModule

  ],

    providers: [SimpleTimer],
})
export class ExaminationPageModule {}
