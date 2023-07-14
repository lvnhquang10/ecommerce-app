import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';
import { ProductListService } from 'src/app/services/product-list.service';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  product$: Observable<Product[]>;

  constructor(
    private api: ProductService, 
    private cart: CartService, 
    private toast: NgToastService,
    private productListService: ProductListService
    ) {

  }

  ngOnInit(): void {
    this.product$ = this.productListService.fetchAll();

  }

  addToCart(item: any) {
    this.toast.success({ detail: 'Product is added', summary: 'Product has been added to cart', duration: 1000 })
    this.cart.addToCart(item);
    console.log(item);
  }
}
