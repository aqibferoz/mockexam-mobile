import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultOverviewPage } from './result-overview';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ResultOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultOverviewPage),
    ChartsModule
  ],
})
export class ResultOverviewPageModule {}
