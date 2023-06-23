import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public productList: any;
  constructor(private api: ProductService, private cart: CartService, private toast: NgToastService) {

  }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price })
      })
    });
  }

  addToCart(item: any) {
    this.toast.success({ detail: 'Product is added', summary: 'Product has been added to cart', duration: 1000 })
    this.cart.addToCart(item);
    console.log(item);
  }
}
