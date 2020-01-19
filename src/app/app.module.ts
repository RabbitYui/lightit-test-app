import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import {ProductsService} from './services/products.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { OneProductPageComponent } from './pages/one-product-page/one-product-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    HeaderComponent,
    OneProductPageComponent,
    AuthenticationPageComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
