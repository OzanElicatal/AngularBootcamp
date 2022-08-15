import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  
  model: any = {
    name: '',
    description:''
  }

  viewFirst: boolean = true;
  viewSecond: boolean = false;
  viewThird: boolean = false;

  filterText: string= "";

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    let auth_token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    })

    const requestOptions = { headers: headers }

    this.http
      .get('http://localhost:3030/api/categories', requestOptions)
      .subscribe((res: any) => {
        console.log(res) 
        this.categories = res.reverse()
      })
    // this.categoryService.getCategoriesList().subscribe(
    //   data => { this.categories = data; })
  };

  viewFirstChange() {
    if (this.viewSecond == false || this.viewThird == false) {
      this.viewFirst = true;
      this.viewSecond = false;
      this.viewThird = false;
    }
  }
  viewSecondChange() {
    if (this.viewFirst == false || this.viewThird == false) {
      this.viewSecond = true;
      this.viewFirst = false;
      this.viewThird = false;
    }
  }
  viewThirdChange() {
    if (this.viewFirst == false || this.viewSecond == false) {
      this.viewThird = true;
      this.viewFirst = false;
      this.viewSecond = false;
    }
  }

}
