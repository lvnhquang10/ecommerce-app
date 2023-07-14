import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";



import { Product } from "../component/models/Product";


@Injectable({
    providedIn: "root",
  })
  export class ProductListService {
    private url = "http://localhost:3000/product";

    constructor(private http: HttpClient) {

    }

    fetchAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url, { responseType: "json" }).pipe(
          tap((_) => console.log("Fetched product"))
        );
      }


  }