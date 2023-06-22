import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any[]>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }

  
}
