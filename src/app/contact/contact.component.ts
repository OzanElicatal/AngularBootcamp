import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/Models/contact';
import { ContactService } from 'app/services/contact.service';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact[] = [];
  filterText: string= "";

  constructor(private alertifyService:AlertifyService,private http:HttpClient,private contactService: ContactService) { }

  url="http://localhost:3030/api/contact-us"

  ngOnInit(): void {
    this.contactService.getContact().subscribe(data => this.contact = data)
  }

  addContact(){
    
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    
    
    var name= document.getElementById("addNameInput") as HTMLInputElement
    
    var phone= document.getElementById("addPhoneInput") as HTMLInputElement
    
    var email= document.getElementById("addEmailInput") as HTMLInputElement
    
    var message= document.getElementById("addMessageInput") as HTMLInputElement
    
    
    
    
    
      const body={name:name.value,phone:phone.value,email:email.value,message:message.value}
      console.log(body)
    this.http.post<Contact>(this.url,body, httpOptions).subscribe(data=>{
      this.alertifyService.success(data.name+" Added")
      window.location.reload()
   })
  }
  message(temp:Contact){
    var phone=""
    var message=""
    const body={phone:temp.phone,message:temp.message}
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'authorization':'Token',
        'Access-Control-Allow-Origin':' *'
      })
    }
    this.http.post("https://api.whatsapp.com/send",body,httpOptions).subscribe(data=>{
      console.log(data)
    })
  }

  saveOptions(){
    var search= document.getElementById("contactName") as HTMLInputElement
    console.log(search)
    localStorage.setItem("filterText",search.value)
    var filterText= document.getElementById("flexCheckChecked2") as HTMLInputElement
  
    
    
  }
  
  clearOptions(){
    localStorage.removeItem("filterText")
    window.location.reload()
  }
}


