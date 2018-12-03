import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeExamsPage } from './home-exams';

@NgModule({
  declarations: [
    HomeExamsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeExamsPage),
  ],
})
export class HomeExamsPageModule {}
