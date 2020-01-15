import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import {ProductsService} from './services/products.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
