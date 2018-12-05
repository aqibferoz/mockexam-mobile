import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultDetailsPage } from './result-details';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ResultDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultDetailsPage),
    ChartsModule
  ],
})
export class ResultDetailsPageModule {}
