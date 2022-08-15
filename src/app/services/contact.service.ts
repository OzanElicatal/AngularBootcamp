import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'app/Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:3030/api/contact-us"

  constructor(private http: HttpClient) { }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url);
  }
}
