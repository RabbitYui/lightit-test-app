import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiURL = 'http://smktesting.herokuapp.com/';
  public userToken: string;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    const body = {username: user.username, password: user.password};
    return this.http.post(`${this.apiURL}api/register/`, body).pipe(
        tap((res: any)  => this.setToken(res.token))
    );
  }

  loginUser(user) {
    const body = {username: user.username, password: user.password};
    return this.http.post(`${this.apiURL}api/login/`, body).pipe(
        tap((res: any)  => this.setToken(res.token))
    );
  }

  setToken(token: string) {
    this.userToken = token;
    localStorage.setItem('userToken', token);
  }

  getToken(): string {
    if (this.userToken === '') {
      if (localStorage.getItem('userToken') === null) {
        return '';
      } else {
        return localStorage.getItem('userToken');
      }
    } else {
      return this.userToken;
    }
  }

  getUsername(): string {
    return localStorage.getItem('userName');
  }

  removeToken() {
    this.userToken = '';
    localStorage.removeItem('userToken');
  }
}
