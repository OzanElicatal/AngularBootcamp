import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from '../Models/iproducts';


@Injectable({
  providedIn: 'root'
})
export class ProductssService {
  url = "http://localhost:3030/api/products";
  deleteURL = "http://localhost:3030/api/products/";

  constructor(private http: HttpClient) { }

  getProductList(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.url);
  }


}
