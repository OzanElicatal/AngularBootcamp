import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../Models/iproducts';
import { ProductssService } from '../services/productss.service';

declare var window: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductssService]
})

export class ProductsComponent implements OnInit {

  products: IProducts[] = [];
  displayMode:number=1
  filterText: string= "";
  deleteModal: any;
  detailModel: any;

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

  
  deleteFormModal() {
    this.deleteModal.show();
  }

  detailFormModal() {
    this.detailModel.show();
  }


  
}
