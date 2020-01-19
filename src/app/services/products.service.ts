import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public apiURL = environment.API;

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getAllProducts(): Observable <any> {
    return this.http.get<any>(`${this.apiURL}/products/`);
  }

  getProductReviews(id: number): Observable <any> {
    return this.http.get<any>(`${this.apiURL}/reviews/${id}`);
  }

  sendReview(prodId: number, rate: number, text: string): Observable <any> {
    const httpOpt = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.userService.userToken
      })
    };
    return this.http.post(`${this.apiURL}/reviews/${prodId}`, {rate, text}, httpOpt);
  }
}
