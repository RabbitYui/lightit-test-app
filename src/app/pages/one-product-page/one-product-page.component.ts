import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-one-product-page',
  templateUrl: './one-product-page.component.html',
  styleUrls: ['./one-product-page.component.scss']
})
export class OneProductPageComponent implements OnInit {

  public productId: number;
  public product: object;
  public reviews: object [];
  public reviewForm: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductsService,
      private formB: FormBuilder) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.params.id);
    this.productService.getAllProducts().subscribe(
        res => {
          this.product = res.find((item) => item.id === this.productId);
        }
    );
    this.productService.getProductReviews(this.productId).subscribe(
      res => {
        this.reviews = res;
        console.log(this.reviews);
      }
    );
    this.initForm();
  }

    initForm() {
        this.reviewForm = this.formB.group({
            name: [''],
            text: [''],
            rating: ['0']
        });
    }

    onFormSubmit() {
        console.log(this.reviewForm.value);
    }
}
