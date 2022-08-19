import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICategory } from "app/Models/icategory";
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import { AccountService } from "./account.service";
import { AlertifyService } from '../services/alertify.service';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {
    url = "http://localhost:3030/api/categories";
    username=sessionStorage.getItem("isLoggedIn")
    httpOptions={
      headers:new HttpHeaders({
        'Authorization': "Bearer "+sessionStorage.getItem(this.username)
      })
    }

    constructor(private http: HttpClient, private alertifyService:AlertifyService, private accountService: AccountService) {}

    getCategoriesList(): Observable<ICategory[]>{
      return this.http.get<ICategory[]>(this.url, this.httpOptions);
    }

    deleteCategory(product: ICategory):Observable<ICategory>{
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem(this.username)
        })
      }
      return this.http.delete<ICategory>(this.url+"/"+product.id,httpOptions).pipe(
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