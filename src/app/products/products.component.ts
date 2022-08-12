import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../Models/iproducts';
import { ProductssService } from '../services/productss.service';
import { ProductRepository } from '../Models/product-repository';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductssService]
})

export class ProductsComponent implements OnInit {

  products: IProducts[] = [];

  model: any = {
    name: '',
    price: 0,
    stock: 0
  }

  constructor(private _productservice: ProductssService) { 
  }

  ngOnInit(): void {
    this._productservice.getProductList().subscribe(data => this.products = data);
  }



}
