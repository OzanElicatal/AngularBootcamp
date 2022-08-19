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

    this.categoryService.getCategoriesList().subscribe(
    data => { this.categories = data; })
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

  showUpdate(category:ICategory){
    this.categoryTemp=category
    console.log(this.categoryTemp)
    return this.categoryTemp
  }


  updateCategory(){
    const httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem(this.username)
      })
    }
    
    console.log(this.categoryTemp)
    var name= document.getElementById("categoryNameInput") as HTMLInputElement
    if(name.value==""){
      name.value=this.categoryTemp.name
    }
    var description= document.getElementById("categoryDescriptionInput") as HTMLInputElement
    if(description.value==""){
      description.value=this.categoryTemp.description;
    }
    
    
    console.log(description.value)
      const body={name:name.value,description:description.value}
    this.http.put<ICategory>(this.url+"/"+this.categoryTemp.id,body, httpOption).subscribe(data=>{
      if(sessionStorage.getItem("lang")=="1"){
        this.alertifyService.success(data.name+" başarıyla güncellendi")
      }
      else{
        this.alertifyService.success(data.name+" Updated")
      }
     
   })
  } 

  showDetails(category: ICategory) {
    this.alertifyService.alertCategory(category.name, "Description: " + category.description.toString() ,
    () => {
    });
    
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

  saveOptions(){
    var search= document.getElementById("categoryName") as HTMLInputElement
    console.log(search)
    localStorage.setItem("filterText",search.value)
    var filterText= document.getElementById("flexCheckChecked2") as HTMLInputElement
  
    
    
  }
  
  clearOptions(){
    localStorage.removeItem("filterText")
    window.location.reload()
  }
}
