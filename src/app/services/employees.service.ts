
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployees } from 'app/Models/iemployees';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = "http://localhost:3030/api/employees";

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployees[]>{
    return this.http.get<IEmployees[]>(this.url)
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


  deleteEmployees(employee:IEmployees):Observable<IEmployees>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    return this.http.delete<IEmployees>(this.url+"/"+employee.id,httpOptions).pipe(
      tap(),
      catchError(this.handleError)

    );
  }
  

  
}
