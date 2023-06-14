import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: 'products', component: HomeComponent
  }, {
    path: '', component: HomeComponent
  }, {
    path: 'shop', component: ShopComponent
  }, {
    path: 'checkout', component: CheckoutComponent
  }, {
    path: 'cart', component: CartComponent
  }, {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
