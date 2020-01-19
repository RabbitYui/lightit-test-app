import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public allProducts: Product [];
  constructor(
      private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(
      res => {
        this.allProducts = res;
      }
    );
  }

}
