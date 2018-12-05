
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(private firestore: AngularFirestore) {
    console.log('Hello ApiProvider Provider');
  }



   // create student

   addStudent(id, data) {
    return this.firestore.collection('students').doc(id).set(data);
  }

  getStudent(id) {
    return this.firestore.collection('students').doc(id).valueChanges();
  }

  getStudents() {
    return this.firestore.collection('students').snapshotChanges();
  }

  deleteStudent(id) {
    return this.firestore.collection('students').doc(id).delete();
  }

  updateStudent(id, data) {
    return this.firestore.collection('students').doc(id).update(data);
  }


  // Category services

  getCategory(id) {
    return this.firestore.collection('category').doc(id).valueChanges();
  }

  getCategorys() {
    return this.firestore.collection('category').snapshotChanges();
  }

  // Subject services

  getSubject(id) {
    return this.firestore.collection('subject').doc(id).valueChanges();
  }

  getSubjects() {
    return this.firestore.collection('subject').snapshotChanges();
  }

  // Chapter services

  getChapter(id) {
    return this.firestore.collection('chapter').doc(id).valueChanges();
  }

  getChapters() {
    return this.firestore.collection('chapter').snapshotChanges();
  }

  // Exam services

  getExam(id) {
    return this.firestore.collection('exam').doc(id).valueChanges();
  }

  getExams() {
    return this.firestore.collection('exam').snapshotChanges();
  }

  // Mcqs services

  getMcq(id) {
    return this.firestore.collection('mcqs').doc(id).valueChanges();
  }

  getMcqs() {
    return this.firestore.collection('mcqs').snapshotChanges();
  }

  getMcqsByMockExamId(mockExamId) {
    return this.firestore.collection('mcqs', resp => resp.where('mockExamId', '==', mockExamId)).snapshotChanges();
  }

   // mocks api

   getMock(id) {
    return this.firestore.collection('mocks').doc(id).valueChanges();
  }

  getMocks() {
    return this.firestore.collection('mocks').snapshotChanges();
  }

  // mockexams api

  getMockExam(id) {
    return this.firestore.collection('mockexams').doc(id).valueChanges();
  }

  getMocksExam() {
    return this.firestore.collection('mockexams').snapshotChanges();
  }

  getMocksExamById(mockId) {
    return this.firestore.collection('mockexams', resp => resp.where('mockId', '==', mockId).orderBy('mockExamName', 'asc')).snapshotChanges();
  }

  /* ADD MCQ To bookmark */
  addStudentBookmark(mcq){
    mcq.studentId = localStorage.getItem('uid');
    return this.firestore.collection('mcq_bookmarks').add(mcq);
  }

  /* Get a single student bookmarks */
  getStudentBookmarks(){
    let id = localStorage.getItem('uid');
    return this.firestore.collection('mcq_bookmarks',ref=> ref.where('studentId','==',id)).snapshotChanges();
  }
  removeBookmark(id){
    return this.firestore.doc('mcq_bookmarks/'+id).delete();
  }

  /* TRANSACTIONS */
  getStudentTransactions(){
    let id = localStorage.getItem('uid');
    return this.firestore.collection('transactions', ref=> ref.where('studentId','==',id)).snapshotChanges();
  }

  /* CATEGORY */
  getAllCategories(){
    return this.firestore.collection('category').snapshotChanges();
  }

  /* SUBJECT  */



  /* MCQs */

  getMockMcqs(mockId){
    return this.firestore.collection('mcqs', ref=> ref.where('chapterId','==',mockId)).snapshotChanges();
  }


getExamMocks(examId){
  return this.firestore.collection('chapter', ref=> ref.where('examId','==',examId)).snapshotChanges();
}

  /* COUPONS */
  getCoupons(){
    return this.firestore.collection('coupons').snapshotChanges();
  }
  getCoupon(id){
    return this.firestore.doc("coupons/"+id).valueChanges();
  }
  removeCoupon(id){
    return this.firestore.doc('coupons/'+id).delete();
  }

  /* USER COUPON */

  /* USER EXAMS
  exams that user has/have/is taking ...

  userexams |
  */

  addUserexam(data){
    return this.firestore.collection('userexams').add(data);
  }
  getUserexam(userexamId){
    return this.firestore.doc('userexams/'+userexamId).valueChanges();
  }
  deleteUserexam(userexamId){
    return this.firestore.doc('userexams/'+userexamId).delete();
  }
  updateUserexam(userexamId,data){
    return this.firestore.doc('userexams/'+userexamId).update(data);
  }

  getUserexamTakenCompleted(userid){
    return this.firestore.collection('userexams', ref => ref.where('userId', '==', userid).where('status', '==', 'complete')).snapshotChanges();
  }

  getUserexamTakenIncomplete(userid) {
    return this.firestore.collection('userexams', ref => ref.where('userId', '==', userid).where('status', '==', 'incomplete')).snapshotChanges();
  }

}
