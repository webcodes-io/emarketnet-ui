import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  constructor() {
    this.product = {
      name: '',
      slug: ''
    };
  }

  ngOnInit() {
  }

}
