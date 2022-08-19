import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'app/services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { Register } from 'app/Models/register';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:Register;
  model: Register = new Register();
  token:string;
  
  

  constructor(private router:Router, private accountService: AccountService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {}

  
  register(form: NgForm){
    var firstName= document.getElementById("firstName") as HTMLInputElement
    var lastName= document.getElementById("lastName") as HTMLInputElement
    var username= document.getElementById("username") as HTMLInputElement
    var password= document.getElementById("password") as HTMLInputElement
    console.log(password.value)
    if(firstName.value.length<2){
      this.alertifyService.error("İsim minimum 2 karakter içermelidir")
    }
    if(lastName.value.length<2){
      this.alertifyService.error("Soyisim minimum 2 karakter içermelidir")
    }
    if(username.value.length<4){
      this.alertifyService.error("Kullanıcı Adı minimum 4 karakter içermelidir")
    }
    if(password.value.length<4){
      this.alertifyService.error("Şifre minimum 4 karakter içermelidir")
    }
    if(firstName.value.length>=2 && lastName.value.length>=2 && username.value.length>=4 && password.value.length>=4){
 
      this.accountService.register(this.model).subscribe(data=>{
        sessionStorage.setItem("Token "+this.model.username,data)
        
      })
      
      this.router.navigate(["home"]);
    }
    
  }
  

}
