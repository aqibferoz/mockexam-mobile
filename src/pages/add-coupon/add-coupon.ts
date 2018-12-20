import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeExamsPage } from '../home-exams/home-exams';

import {map} from 'rxjs/operators';

// Providers
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the AddCouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-coupon',
  templateUrl: 'add-coupon.html',
})
export class AddCouponPage {

  couponId: string;
  cId;
  user: any;
  coupons: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private api: ApiProvider, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCouponPage');
    this.api.getStudent(this.auth.getToken())
    .subscribe(resp => {
      this.user = resp;
    });

  this.api.getCoupons().pipe(map(
    list => {
      return list.map(
        items => {
          const data = items.payload.doc.data();
          const id = items.payload.doc.id;
          return { id, ...data }
        }
      )
    }
  )).subscribe( resp => {
    this.coupons = resp;
  })

  }

  addCoupon() {

    this.api.getCouponWithId(this.couponId)
      .subscribe(resp => {
        this.cId = resp;
        console.log(this.cId);
        if (this.couponId === this.cId[0].couponId) {

          this.api.updateStudent(this.auth.getToken(), {balance: this.cId[0].amount+this.user.balance})
          .then(
            () => {
              let c = this.coupons.filter(element => element.couponId === this.cId[0].couponId);
              this.api.removeCoupon(c[0].id)
              .then(
                () => {
                  console.log('Coupon Removed');
                }
              );
            }
          )

        }
      })


  }


  goBack(){
    this.navCtrl.push(HomeExamsPage);
  }
}
