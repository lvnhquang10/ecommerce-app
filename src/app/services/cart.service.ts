import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cart } from "../component/models/Cart";
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData = {
    products: [],
    total: 0,
  };

  cartDataObs$ = new BehaviorSubject(this.cartData);
  public productList = new BehaviorSubject<any>([]);
  public cartItemList: any = [];

  private url = "http://localhost:3000/cart";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }; 
  items: any;
  products: any;
  
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    

    this.cartDataObs$.next(this.cartData);
   }
   //Add to cart but cannot post data on API
   addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

getTotalPrice(): void {
  let grandTotal = 0;
  this.cartItemList.map((a:any) => {
    grandTotal += a.total;
  })
  
} 

  getProduct() {
    return this.productList.asObservable();
  }
  removeCartItem(product:any) {
    this.cartItemList.map((a:any,index:any)=>{
      if (product.id === a.id) 
      this.cartItemList.splice(index,1)
    })
    this.productList.next(this.cartItemList);
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  fetchAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url, { responseType: "json" }).pipe(
      tap((_) => console.log("Fetched order")),
      catchError(
        this.errorHandlerService.handleError<Cart[]>("fetchAll", [])
      )
    );
  }

  post(name: Partial<Cart>): Observable<any> {
    return this.http.post<Partial<Cart>>(this.url, name, this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<Cart[]>("post")
      )
    );
  }
}
