import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('test')

  }

  onRegisterSubmit(myRegisterForm: NgForm) {
    const body = myRegisterForm.value
    console.log(body)
    this.http
      .post<string>('http://localhost:3030/api/auth/register', body)
      .subscribe({
        next: (data) => {
          console.log(data)
          localStorage.setItem('token', data)
          localStorage.setItem('loginCheck', 'true')

          this.toastr.success(
            'Kayıt İşlemi Başarılı Yönlendiriliyorsunuz',
            'Toastr!',
            { timeOut: 2000 },
          )

          setTimeout(() => {
            location.replace('/products')
          }, 1000)
        },
        error: (error) => {
          this.toastr.error('Başarısız Kayıt Denemesi', 'Toastr fun!', {
            timeOut: 2000,
          })
        },
      })
  }

  

}
