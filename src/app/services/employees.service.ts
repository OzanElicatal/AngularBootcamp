
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployees } from 'app/Models/iemployees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = "http://localhost:3030/api/employees";

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployees[]>{
    return this.http.get<IEmployees[]>(this.url)
  }
}
