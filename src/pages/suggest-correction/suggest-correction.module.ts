import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuggestCorrectionPage } from './suggest-correction';

@NgModule({
  declarations: [
    SuggestCorrectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SuggestCorrectionPage),
  ],
})
export class SuggestCorrectionPageModule {}
