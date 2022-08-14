import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'app/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NavbarComponent]
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService, private navbar: NavbarComponent) { }

  ngOnInit(): void {
  }       

  onSubmit(myForm: NgForm) {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    }
    const body = myForm.value
    this.http
      .post<any>('http://localhost:3030/api/auth/login', body, { headers })
      .subscribe({
        next: (data) => {
          console.log(data)
          localStorage.setItem('token', data)
          localStorage.setItem('loginCheck', 'true')

          this.toastr.success(
            'Giriş Başarılı Yönlendiriliyorsunuz',
            'Toastr fun!',
            { timeOut: 1000 },
          )

          setTimeout(() => {
            location.replace('/categories')
          }, 1000)

          
        },
        error: (error) => {
          this.toastr.error('Başarısız Giriş Denemesi', 'Toastr fun!', {
            timeOut: 2000,
          })
        },
      })
  }




}
