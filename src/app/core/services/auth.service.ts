import { Injectable } from '@angular/core';
import { FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'newrxjs';
import { baseUrl } from '../../core/services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { getAccessToken } from './config';
import { environment } from 'src/environments/environment';
import { User, SignIn, UpdateUser } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(true);
  userInfo = new BehaviorSubject<any>(undefined);
  language = new BehaviorSubject<string>('en');

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private router: Router
  ) {}

  httpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${getAccessToken()}`,
      }),
    };
  }

  signIn(body: SignIn) {
    return this.http.post(`${baseUrl}/user/sign/in`, body);
  }
  signUp(body: User) {
    return this.http.post(`${baseUrl}/user/sign/up`, body);
  }
  signOut() {
    return this.http.post(`${baseUrl}/user/sign/out`, {}, getAccessToken());
  }

  updateUser(body: UpdateUser) {
    return this.http.put(`${baseUrl}/user/update`, body, getAccessToken());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        console.log('You have been successfully logged in!');
        console.log(result);
        alert(
          'Hello' +
            ' ' +
            result.additionalUserInfo.profile.name +
            ' ' +
            'see more info in console log'
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  isLoggedIn() {
    if (!this.isLogin.getValue()) {
      this.router.navigate(['sign-in']);
    }
    return;
  }

  getIsLogin() {
    return this.isLogin.asObservable();
  }
  getUserInfo() {
    return this.userInfo.asObservable();
  }
  getLanguage() {
    return this.language.asObservable();
  }
}
