import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeExamsPage } from './home-exams';
import {NgPipesModule} from 'ngx-pipes';
@NgModule({
  declarations: [
    HomeExamsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeExamsPage),
    NgPipesModule
  ],
})
export class HomeExamsPageModule {}
