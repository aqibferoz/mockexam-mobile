import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    ExamsPage,

  ],
  imports: [
    IonicPageModule.forChild(ExamsPage),
    NgPipesModule
  ],
})
export class ExamsPageModule {}
