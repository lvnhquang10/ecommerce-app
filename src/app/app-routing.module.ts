import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CustomerAuthComponent } from './component/customer-auth/customer-auth.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'shop', component: ShopComponent
  }, {
    path: 'checkout', component: CheckoutComponent
  }, {
    path: 'cart', component: CartComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'sign-up', component: SignUpComponent
  }, {
    path: 'header', component: HeaderComponent
  }, {
    path: 'footer', component: FooterComponent
  }, {
    path: 'customer-auth', component: CustomerAuthComponent
  }, {
    path: 'seller-auth', component: SellerAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
