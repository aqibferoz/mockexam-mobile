import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsDetailsUnpurchasedPage } from './exams-details-unpurchased';
import {NgPipesModule} from 'ngx-pipes'
@NgModule({
  declarations: [
    ExamsDetailsUnpurchasedPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamsDetailsUnpurchasedPage),
    NgPipesModule
  ],
})
export class ExamsDetailsUnpurchasedPageModule {}
