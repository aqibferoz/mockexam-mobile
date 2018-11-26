import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';

@NgModule({
  declarations: [
    ExamsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamsPage),
  ],
})
export class ExamsPageModule {}
