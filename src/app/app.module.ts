import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { AppRoutes } from './routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  	ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
