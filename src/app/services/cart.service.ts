import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cart } from "../component/models/Cart";
import { ErrorHandlerService } from './error-handler.service';


=======
import { BehaviorSubject, Observable, tap  } from 'rxjs';
>>>>>>> b39b0452d3d10729e189cac296f6b07bfeb5979b
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData = {
    products: [],
    total: 0,
  };

  cartDataObs$ = new BehaviorSubject(this.cartData);
  public productList = new BehaviorSubject<any>([])
  public cartItemList: any = []
<<<<<<< HEAD
=======
  public url = '';
  constructor(private http: HttpClient) { }
>>>>>>> b39b0452d3d10729e189cac296f6b07bfeb5979b

  private url = "http://localhost:3000/cart";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }; 
  
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    

    this.cartDataObs$.next(this.cartData);
   }
   //Add to cart but cannot post data on API
   addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

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
  
  fetchAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url, { responseType: "json" }).pipe(
      tap((_) => console.log("Fetched order")),
      catchError(
        this.errorHandlerService.handleError<Cart[]>("fetchAll", [])
      )
    );
  }

<<<<<<< HEAD
  post(name: Partial<Cart>): Observable<any> {
    return this.http.post<Partial<Cart>>(this.url, name, this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<Cart[]>("post")
      )
=======
  fetchAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url, { responseType: "json" }).pipe(
      tap((_) => console.log("Fetched product"))
>>>>>>> b39b0452d3d10729e189cac296f6b07bfeb5979b
    );
  }
}
