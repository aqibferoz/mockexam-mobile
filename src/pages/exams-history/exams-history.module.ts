import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsHistoryPage } from './exams-history';

@NgModule({
  declarations: [
    ExamsHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamsHistoryPage),
  ],
})
export class ExamsHistoryPageModule {}
