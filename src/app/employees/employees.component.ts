import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployees } from 'app/Models/iemployees';
import { EmployeesService } from 'app/services/employees.service';
import { AlertifyService } from 'app/services/alertify.service';
import { Router } from '@angular/router';
declare let http:any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
 
  employees: IEmployees[] = [];
  url="http://localhost:3030/api/employees";
  employeetemp: IEmployees;

  viewFirst: boolean = true;
  viewSecond: boolean = false;
  viewThird: boolean = false;

  filterText: string= "";

  constructor(private employeeService: EmployeesService, private router: Router, private alertifyService: AlertifyService, private http:HttpClient) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
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

  

  // delete---
  deletecategory(employees:IEmployees){
 
    this.alertifyService.confirm(employees.firstName+ employees.lastName+ " you are about to delete it" , "Are you sure?",()=>{
      this.employeeService.deleteEmployees(employees).subscribe(data=>{})
      
      // this.router.navigate(["/products"])
      window.location.reload();
    }, ()=>{ this.alertifyService.error('Cancelled')}
    )
}


update(){
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'authorization':'Token'
    })
  }
  
  console.log(this.employeetemp)
  var firstName= document.getElementById("employeeFirstnameInput") as HTMLInputElement
  if(firstName.value==""){
    firstName.value=this.employeetemp.firstName
  }
  var lastName= document.getElementById("employeeLastnameInput") as HTMLInputElement
  
  if(lastName.value==""){
    lastName.value=this.employeetemp.lastName.toString();
  }
  
  var title= document.getElementById("employeeTitleInput") as HTMLInputElement
  if(title.value==""){
    title.value=this.employeetemp.title.toString();
  }
  console.log(title.value)
  var country= document.getElementById("employeeCountryInput") as HTMLInputElement
  if(country.value==""){
    country.value=this.employeetemp.country;
  }
  var city= document.getElementById("employeeCityInput") as HTMLInputElement
  if(city.value==""){
    city.value=this.employeetemp.city;
  }
  var birthDate= document.getElementById("employeeBirthDateInput") as HTMLInputElement
  if(birthDate.value==""){
    birthDate.value=this.employeetemp.birthDate;
  }
  
  
    const body={firstName:firstName.value,lastName:lastName.value,title:title.value,country:country.value,city:city.value,birthDate:birthDate.value}
    console.log(body)
    this.http.put<IEmployees>(this.url+"/"+this.employeetemp.id,body, httpOptions).subscribe(data=>{
      
      this.alertifyService.success(data.firstName+" Updated")
      
 })
}
addToCart(employee:string){
this.alertifyService.success(employee+" Added")
}

addEmployee(){

  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'authorization':'Token '
    })
  }
  
  
  var firstName= document.getElementById("addemployeeFirstNameInput") as HTMLInputElement
  console.log(firstName)
  var lastName= document.getElementById("addemployeeLastNameInput") as HTMLInputElement
  
  
  
  var title= document.getElementById("addemployeeTitleInput") as HTMLInputElement
 
  console.log(title.value)
  var country= document.getElementById("addemployeeCountryInput") as HTMLInputElement
  
  var city= document.getElementById("addemployeeCityInput") as HTMLInputElement
  
  var birthDate= document.getElementById("addemployeeBirthDateInput") as HTMLInputElement
  
  var imageName= document.getElementById("addImageInput") as HTMLInputElement
  
    var body={firstName:firstName.value,lastName:lastName.value,title:title.value,country:country.value,city:city.value,birthDate:birthDate.value,imageName:imageName.value}
  
    
    console.log(body)
  this.http.post<IEmployees>(this.url, body, httpOptions).subscribe(data=>{
    this.alertifyService.success(data.firstName+" Added")
    window.location.reload()

 })
}

showUpdate(employee:IEmployees){
  this.employeetemp=employee
  console.log(this.employeetemp)
  return this.employeetemp
}

}
