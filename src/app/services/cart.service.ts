import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productList = new BehaviorSubject<any>([])
  public cartItemList: any = []
  public url = '';
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() {
    let total = 0;
    this.cartItemList.map((a:any)=>{
      total += a.total;
      
    })
    return total;
  }

  removeCartItem(product:any) {
    this.cartItemList.map((a:any,index:any)=>{
      if (product.id === a.id) 
      this.cartItemList.splice(index,1)
    })
    this.productList.next(this.cartItemList);
  }

  fetchAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url, { responseType: "json" }).pipe(
      tap((_) => console.log("Fetched product"))
    );
  }
}
