import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  model = {
	  productName: undefined,
	  productDescription: undefined,
	  productPrice: null
	};

  ngOnInit() {

  }

  submitNewProduct() {
  	this.productsService.createProduct(this.model).subscribe(value => console.log(value));
  }

}
