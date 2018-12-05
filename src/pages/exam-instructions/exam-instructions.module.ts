import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamInstructionsPage } from './exam-instructions';

@NgModule({
  declarations: [
    ExamInstructionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamInstructionsPage),
  ],
})
export class ExamInstructionsPageModule {}
