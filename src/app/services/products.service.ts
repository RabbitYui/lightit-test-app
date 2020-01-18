import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public apiURL = 'http://smktesting.herokuapp.com/';

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getAllProducts(): Observable <any> {
    return this.http.get<any>(`${this.apiURL}api/products/`);
  }

  getProductReviews(id: number): Observable <any> {
    return this.http.get<any>(`${this.apiURL}api/reviews/${id}`);
  }

  sendReview(prodId: number, rate: number, text: string): Observable <any> {
    const httpOpt = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.userService.userToken
      })
    };
    return this.http.post(`${this.apiURL}api/reviews/${prodId}`, {rate, text}, httpOpt);
  }
}
