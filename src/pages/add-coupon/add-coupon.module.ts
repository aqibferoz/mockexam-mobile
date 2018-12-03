import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCouponPage } from './add-coupon';

@NgModule({
  declarations: [
    AddCouponPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCouponPage),
  ],
})
export class AddCouponPageModule {}
