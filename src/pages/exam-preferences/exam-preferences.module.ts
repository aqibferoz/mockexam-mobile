import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamPreferencesPage } from './exam-preferences';

@NgModule({
  declarations: [
    ExamPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamPreferencesPage),
  ],
})
export class ExamPreferencesPageModule {}
