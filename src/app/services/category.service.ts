import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICategory } from "app/Models/icategory";
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
    url = "http://localhost:3000/api/categories";

    constructor(private http: HttpClient) {}

    getCategoriesList(): Observable<ICategory>{
      return this.http.get<ICategory>(this.url);
    }

    createCategroy(categories: ICategory): Observable<ICategory>{
    
      return this.http.post<ICategory>(this. url,categories);
    }
}