import { Component } from '@angular/core';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { ICategory } from './Models/icategory';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  loggedIn = false;
  
  language = {
    home: '',
    products: '',
    categories: '',
    employees: '',
    contactUs: '',
    logout: '',
    login: '',
    register: '',
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    send: '',
  }


  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    location.reload();
  }

  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    if (!lang) this.setLang('tr');

    if (lang === 'tr') {
      this.language.home = 'Anasayfa';
      this.language.products = 'Ürünler';
      this.language.categories = 'Kategoriler';
      this.language.employees = 'Çalışanlar';
      this.language.contactUs = 'Bize Ulaşın';
      this.language.logout = 'Çıkış';
      this.language.login = 'Giriş yap';
      this.language.register = 'Kayıt ol';
      this.language.firstname = 'İsim';
      this.language.lastname = 'Soyisim';
      this.language.username = 'Kullanıcı adı';
      this.language.password = 'Kullanıcı şifresi';
      this.language.send = 'Gönder';
    }
    if (lang === 'en') {
      this.language.home = 'Home';
      this.language.products = 'Products';
      this.language.categories = 'Categories';
      this.language.employees = 'Employees';
      this.language.contactUs = 'Contact Us';
      this.language.logout = 'Logout';
      this.language.login = 'Login';
      this.language.register = 'Register';
      this.language.firstname = 'Firstname';
      this.language.lastname = 'Lastname';
      this.language.username = 'Username';
      this.language.password = 'Password';
      this.language.send = 'Submit';
    }
  }
}
 