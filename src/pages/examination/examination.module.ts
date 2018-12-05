import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExaminationPage } from './examination';

@NgModule({
  declarations: [
    ExaminationPage,
  ],
  imports: [
    IonicPageModule.forChild(ExaminationPage),
  ],
})
export class ExaminationPageModule {}
