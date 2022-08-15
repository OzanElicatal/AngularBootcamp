import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProducts } from '../Models/iproducts';
import {tap,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductssService {
  url = "http://localhost:3030/api/products";

  constructor(private http: HttpClient) { }

  getProductList(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.url);
  }

  deleteProducts(product: IProducts):Observable<IProducts>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    return this.http.delete<IProducts>(this.url+"/"+product.id,httpOptions).pipe(
      tap(),
      catchError(this.handleError)

    );
  }

  handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage='There is a Problem: '+error.error.message
    }else{
      errorMessage="Systemical Error"
    }
    return throwError(errorMessage);
  }



}
