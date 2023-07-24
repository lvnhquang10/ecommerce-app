import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product$: Observable<Product[]>;
  cart$: Observable<Cart[]>;

  public products!: any[];
  public total: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.fetchAll();
   
    this.cartService.getProduct().subscribe(res => {
      this.products = res;
    });
  }

  fetchAll(): Observable<Cart[]> {
    return this.cartService.fetchAll();
  }
 
  remove(item:any) {
    this.cartService.removeCartItem(item);
  }
 
}
