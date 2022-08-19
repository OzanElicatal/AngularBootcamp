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
      this.alertifyService.error("The name must contain a minimum of 2 characters")
    }
    if(lastName.value.length<2){
      this.alertifyService.error("The surname must contain a minimum of 2 characters")
    }
    if(username.value.length<4){
      this.alertifyService.error("The username must contain a minimum of 4 characters")
    }
    if(password.value.length<4){
      this.alertifyService.error("The password must contain a minimum of 4 characters")
    }
    if(firstName.value.length>=2 && lastName.value.length>=2 && username.value.length>=4 && password.value.length>=4){
 
      this.accountService.register(this.model).subscribe(data=>{
        sessionStorage.setItem("Token "+this.model.username,data)
        
      })
      
      this.router.navigate(["home"]);
    }
    
  }
  

}
