import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { RoutingModule } from './routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
  	ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
