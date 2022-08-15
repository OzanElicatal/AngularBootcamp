import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../Models/iproducts';
import { ProductssService } from '../services/productss.service';
import { ToastrService } from "ngx-toastr";

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

  viewFirst: boolean = true;
  viewSecond: boolean = false;
  viewThird: boolean = false;

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

  viewFirstChange() {
    if (this.viewSecond == false || this.viewThird == false) {
      this.viewFirst = true;
      this.viewSecond = false;
      this.viewThird = false;
    }
  }
  viewSecondChange() {
    if (this.viewFirst == false || this.viewThird == false) {
      this.viewSecond = true;
      this.viewFirst = false;
      this.viewThird = false;
    }
  }
  viewThirdChange() {
    if (this.viewFirst == false || this.viewSecond == false) {
      this.viewThird = true;
      this.viewFirst = false;
      this.viewSecond = false;
    }
  }

  
  
}
