import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { RoutingModule } from './route-routing.module';
import { ProductsService } from './services/products.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
  	ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
