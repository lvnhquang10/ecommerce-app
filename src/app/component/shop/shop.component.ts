import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';
import { ProductListService } from 'src/app/services/product-list.service';
import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  product$: Observable<Product[]>;
  cart$: Observable<Cart[]>;


  constructor(
    private cartService: CartService, 
    private toast: NgToastService,
    private productListService: ProductListService
    ) {

  }

  ngOnInit(): void {
    this.product$ = this.productListService.fetchAllProduct();
    this.productListService['array'].forEach((a:any) => {
      Object.assign(a,{quantity:1, total:a.price});
    });
  }

  addToCart(product: any) {
    this.toast.success({ detail: 'Product is added', summary: 'Product has been added to cart', duration: 1000 })
    this.cartService.addToCart(product);
    console.log(product);
  }

  fetchAllProduct(): Observable<Cart[]> {
    return this.cartService.fetchAll();
  }

  
  
  onAddToCart(): void {

  }
}
