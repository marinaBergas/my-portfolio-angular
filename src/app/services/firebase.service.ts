import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  readonly firebaseConfig = {
    apiKey: 'AIzaSyAuI1M_t7o9ie60R3oB6x7ffBd7SGaI8Kc',
    authDomain: 'myportfolio-40d07.firebaseapp.com',
    projectId: 'myportfolio-40d07',
    storageBucket: 'myportfolio-40d07.appspot.com',
    messagingSenderId: '773321720615',
    appId: '1:773321720615:web:5faa3dd9b446013b811f02',
    measurementId: 'G-CGDQR2ELNP',
  };
  readonly firebaseApp: any;
  appVerifier: any;
  confirmationResult: any;
  readonly dpUrl =
    'https://myportfolio-40d07-default-rtdb.europe-west1.firebasedatabase.app/';
  readonly fireAuth: any;
  readonly database: any;
  readonly messaging: any;
  readonly storage: any;
  downloadImageUrl: any;
  constructor() {
    this.firebaseApp = initializeApp(this.firebaseConfig);
    this.fireAuth = getAuth(this.firebaseApp);
    this.database = getDatabase();
    this.storage = getStorage();
    // this.storageRef = ref(storage, 'projectImage');
  }
  async authinticateUser(email: string, password: string) {
    console.log(email);
    if (!this.appVerifier) this.recaptcha();
    try {
      this.confirmationResult = await signInWithEmailAndPassword(
        this.fireAuth,
        email,
        password
      );
      return this.confirmationResult;
    } catch (error) {
      throw error;
    }
  }
  async createUser(email: string) {
    if (!this.appVerifier) this.recaptcha();
    try {
      this.confirmationResult = createUserWithEmailAndPassword(
        this.fireAuth,
        email,
        this.appVerifier
      );
      return this.confirmationResult;
      // Signed in
      // const user = userCredential.user;
      // ...
    } catch (error) {
      throw error;
    }
  }
  recaptcha() {
    this.appVerifier = new RecaptchaVerifier(this.fireAuth, 'sign-in-button', {
      size: 'invisible',
      callback: (response: any) => {
        console.log('capresponse', response);
      },
      'expired-callback': () => {},
      'error-callback': (e: any) => {
        console.log('Error occurred', e);
      },
    });
  }

  async verifyOtp(otp: string) {
    if (!this.appVerifier) {
      this.recaptcha();
    }
    try {
      return this.confirmationResult.confirm(otp);
    } catch (error) {}
  }
  async uploadimage(e: any) {
    const file = e.target.files[0];
    const storageRef = ref(this.storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      this.downloadImageUrl = downloadURL;
    });
    console.log(this.downloadImageUrl);

    return this.downloadImageUrl;
  }

}
