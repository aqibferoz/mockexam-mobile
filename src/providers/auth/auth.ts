
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signup(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  saveToken(uid){
    localStorage.setItem('uid',uid);
  }
  getToken(){
    return localStorage.getItem('uid');
  }
  isAuthenticated(){
    if(localStorage.getItem('uid') !== null){
      return true;
  }else{
    return false;
  }
  }
  resetPassword(email: string): any {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
  logout(){
    localStorage.clear();
  }

}
