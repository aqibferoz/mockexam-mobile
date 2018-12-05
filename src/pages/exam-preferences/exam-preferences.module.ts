import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamPreferencesPage } from './exam-preferences';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    ExamPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamPreferencesPage),
    NgPipesModule
  ],
})
export class ExamPreferencesPageModule {}
