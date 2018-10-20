import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  createProduct(productDetails: any) {
  	//for now just return same data passed into arg (later we will have API for back end)
  	return Observable.of(productDetails);
  }

}
