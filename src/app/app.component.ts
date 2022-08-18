import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService:AccountService, private router: Router){}
  title = 'Project';
  filterText=""
  ngOnInit(){
    
    if(sessionStorage.getItem("isLoggedIn")){
      this.accountService.Logged();
    }
    console.log(this.accountService.isLoggedIn())
    if(!this.accountService.isLoggedIn()){
      
      this.route2();
      
    }
    
  }
  
  route2(){
    this.router.navigate(["/login"]);
  }
}