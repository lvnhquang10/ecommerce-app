import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products!: any[];
  public total: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res => {
      this.products = res;
      this.total = this.cart.getTotalPrice();
    });

  }

  remove(item:any) {
    this.cart.removeCartItem(item);
  }
}
