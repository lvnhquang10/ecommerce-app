import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productList: any [] = [];
  cartObj : any = {
    "CartId": 0,
    "CustId": 0,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-06-14T22:26:12.064Z"
  };
  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList = result.data;
    })
  }

  addItemToCart(productId: number) {
    
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
      if(result.result) {
        alert("Product Added To Cart");
        this.productService.cartAddedSubject.next(true);
      }
    })
  }  
}
