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
    productId: ''
  };

  constructor(private productService: ProductssService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => this.product = data);
  }

  createProduct(name: any,price: any,stock: any,imgName: any){
    const product = {
      id: 0,
      name: name.value,
      price: price.value,
      stock: stock.value,
      imageName: imgName.value
    }
    this.productService.createProduct(product).subscribe(data => {
      this.router.navigate(['/products', data.id]);
    })
  }

}
