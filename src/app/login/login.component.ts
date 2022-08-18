import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AccountService } from 'app/services/account.service';
import { AlertifyService } from 'app/services/alertify.service';
import { Login } from 'app/Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = new Login();
  loginTokenValue:string;

  constructor(private accountService: AccountService, private router: Router,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }       

  login(form: NgForm) {
    
    this.accountService.login(this.model).subscribe(data=>{
      this.accountService.Logged()
      this.loginTokenValue=data
      sessionStorage.setItem("isLoggedIn",this.model.username)
      sessionStorage.setItem(this.model.username,data)
      this.route();
    })

  }
  getTokenValue(){
    return this.loginTokenValue
  }
  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  route(){
    
    if(this.accountService.isLoggedIn()){
     
      this.router.navigate(["/home"]);
    }

  

  }

}
