import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';

import { CartService } from 'src/app/services/cart.service';

import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

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
  
  constructor(private cartService: CartService, private http: HttpClient) { }

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
 
  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      
    }).subscribe(async(res: any) => {
      let stripe = await loadStripe('pk_test_51MrHMeGrxNYVMq1CbIIJSkvyxWOXwcMOeJgyeQi8fiwvd1VQD0sGkTZkD0CFwPwyXAqqDcEEN6QBBEEFA9tGrTxK00oFgOgiCk');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  }
}
