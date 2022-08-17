import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'app/services/alertify.service';
import { Router } from '@angular/router';
import { ICategory } from '../Models/icategory';
import { CategoryService } from 'app/services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories:ICategory[];
  categoryTemp:ICategory;
  url="http://localhost:3030/api/categories"
  tokenType  = 'Bearer ';
  username=sessionStorage.getItem("isLoggedIn")
  
  
  viewFirst: boolean = true;
  viewSecond: boolean = false;
  viewThird: boolean = false;

  filterText: string= "";

  constructor(private http: HttpClient, private alertifyService:AlertifyService, private categoryService:CategoryService) { }

  ngOnInit(): void {

    // this.categoryService.getCategoriesList().subscribe(
    //   data => { this.categories = data; })
  };

    // add product
    addCategory(){
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'authorization':'Bearer '+sessionStorage.getItem(this.username)
        })
      }
      
      
      var name= document.getElementById("addNameInput") as HTMLInputElement
      
      var description= document.getElementById("addDescriptionInput") as HTMLInputElement
      
      
      
      var imageName= document.getElementById("addImageInput") as HTMLInputElement
      
  
        const body={name:name.value,description:description.value,imageName:imageName.value}
        console.log(body)
      this.http.post<ICategory>(this.url,body, httpOptions).subscribe(data=>{
        this.alertifyService.success(data.name+" Added")
        window.location.reload()
     })
    }
    
    delete(category: ICategory){
 
      this.alertifyService.confirm(category.name+ " you are about to delete it","ArE you sure?",()=>{
        this.categoryService.deleteCategory(category).subscribe(data=>{})
        
        // this.router.navigate(["/products"])
        window.location.reload();
      }, ()=>{ this.alertifyService.error('Cancelled')}
      )
  }

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
