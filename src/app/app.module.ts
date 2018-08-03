import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UploadProductImagesComponent } from './upload-product-images/upload-product-images.component';

const appRoutes: Routes = [
  {
    path: 'add-product',
    component: EditProductComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EditProductComponent,
    UploadProductImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
