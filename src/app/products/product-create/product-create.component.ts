import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IProducts } from 'app/Models/iproducts';
import { ProductssService } from 'app/services/productss.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [ProductssService]
})
export class ProductCreateComponent implements OnInit {
  
  product: IProducts[] = [];

  model: any = {
    name: '',
    price: 0,
    stock: 0,
    imageUrl: ''
  }


  constructor(private productService: ProductssService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => this.product = data);
  }

  

}
