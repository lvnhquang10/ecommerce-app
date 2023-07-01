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
import { AdminComponent } from './component/admin/admin.component';
import { ProfileComponent } from './component/profile/profile.component';


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
    path: 'admin', component: AdminComponent
  }, {
    path: 'profile', component: ProfileComponent
  }, {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
