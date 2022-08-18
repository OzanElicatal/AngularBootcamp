import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

  }

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
    this.route2()
  }
  route2(){
    
    this.router.navigate(["login"]);
  }


}
