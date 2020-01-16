import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {OneProductPageComponent} from './pages/one-product-page/one-product-page.component';
import {AuthenticationPageComponent} from './pages/authentication-page/authentication-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/:id',  component: OneProductPageComponent},
  {path: 'auth', component: AuthenticationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
