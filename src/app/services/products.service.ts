import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  createProduct(productDetails: any) {
  	//for now just return same data passed into arg (later we will have API for back end)
  	// in latest Observable version we can import and use "of({})" instead of "Observable.of({})"
  	return of(productDetails);
  }

}
