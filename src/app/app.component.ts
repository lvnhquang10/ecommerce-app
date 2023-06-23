import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private productService: ProductService, private toast : NgToastService) {
    
  }

  ngOnInit(): void {
    
  }

  
}
