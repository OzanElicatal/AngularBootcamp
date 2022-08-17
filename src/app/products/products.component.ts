import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProducts } from '../Models/iproducts';
import { ProductssService } from '../services/productss.service';
import { ToastrService } from "ngx-toastr";
import { AlertifyService } from 'app/services/alertify.service';
import { Router } from '@angular/router';

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

  constructor(private _productservice: ProductssService, private http:HttpClient, private alertifyService: AlertifyService, private router: Router) { 
  }

  producttemp: IProducts ;
  url = "http://localhost:3030/api/products";

  ngOnInit(): void {
    this._productservice.getProductList().subscribe(data => this.products = data);

  }
  update(){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }


    var name= document.getElementById("productNameInput") as HTMLInputElement
    if(name.value==""){
      name.value=this.producttemp.name
    }
    var price= document.getElementById("productPriceInput") as HTMLInputElement
    if(price.value==""){
      price.value=this.producttemp.price.toString();
    }
    var stock= document.getElementById("productStockInput") as HTMLInputElement
    if(stock.value==""){
      stock.value=this.producttemp.stock.toString();
    }



    console.log(this.producttemp)
      const body={name:name.value,price:+price.value,stock:+stock.value}
    this.http.put<IProducts>(this.url+"/"+this.producttemp.id,body, httpOptions).subscribe(data=>{
      console.log(data)
   })
  }

  showUpdate(products: IProducts){
    this.producttemp=products

    return this.producttemp
  }

// delete---
  delete(product:IProducts){
 
      this.alertifyService.confirm(product.name+ " you are about to delete it","ArE you sure?",()=>{
        this._productservice.deleteProducts(product).subscribe(data=>{})
        
        // this.router.navigate(["/products"])
        window.location.reload();
      }, ()=>{ this.alertifyService.error('Cancelled')}
      )
  }

  // add product
  addProduct(){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }


    var name= document.getElementById("addNameInput") as HTMLInputElement

    var price= document.getElementById("addPriceInput") as HTMLInputElement

    var stock= document.getElementById("addStockInput") as HTMLInputElement

    var imageName= document.getElementById("addImageInput") as HTMLInputElement





      const body={name:name.value,price:+price.value,stock:+stock.value,imageName:imageName.value}


    this.http.post<IProducts>(this.url,body, httpOptions).subscribe(data=>{
      this.alertifyService.success(data.name+" Added")
      window.location.reload()
   })
  }
  
  deleteFormModal() {
    this.deleteModal.show();
  }

  detailFormModal() {
    this.detailModel.show();
  }

  // VİEWS
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
