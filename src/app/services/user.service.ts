import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators/tap';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiURL = environment.API;

  constructor(private http: HttpClient) { }

  get userToken(): string {
    return localStorage.getItem('userToken') || '';
  }

  registerUser(user) {
    const body = {username: user.username, password: user.password};
    return this.http.post(`${this.apiURL}/register/`, body).pipe(
        tap((res: any)  => this.setToken(res.token))
    );
  }

  loginUser(user) {
    const body = {username: user.username, password: user.password};
    return this.http.post(`${this.apiURL}/login/`, body).pipe(
        tap((res: any)  => {
          if ( res.success === true) {
            this.setToken(res.token);
          }
        })
    );
  }

  setToken(token: string) {
    localStorage.setItem('userToken', token);
  }

   getUsername(): string {
    return localStorage.getItem('userName');
  }

  removeToken() {
    localStorage.removeItem('userToken');
  }
}
