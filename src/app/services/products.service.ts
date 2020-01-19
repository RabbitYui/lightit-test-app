import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';
import {Product} from '../models/product.model';
import {Review} from '../models/review.model';
import {map} from 'rxjs/operators';
import {providerDef} from '@angular/compiler/src/view_compiler/provider_compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public apiURL = environment.API;

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getAllProducts(): Observable <Product []> {
    return this.http.get<any>(`${this.apiURL}/products/`).pipe(
        map((products: any) => {
          return products.map(product => {
            return new Product(product);
          });
        })
    );
  }

  getProductReviews(id: number): Observable <Review []> {
    return this.http.get<any>(`${this.apiURL}/reviews/${id}`).pipe(
        map( (reviews: any) => {
          return reviews.map(review => {
            return new Review(review);
          });
        })
    );
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
