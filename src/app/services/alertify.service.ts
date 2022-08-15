import { Injectable } from '@angular/core';
import { IProducts } from 'app/Models/iproducts';
import { Observable } from 'rxjs';

declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
product: IProducts[];
lang:number
  constructor() { }
  success(message:string){
    alertify.success(message)
  }
  error(message:string){
    alertify.error(message)
  }
  warning(message:string){
    alertify.warning(message)
  }
  confirm(title:string,message:string,okCallback: () => any, cancelCallback: () => any){
    alertify.confirm(title, message, () => { okCallback(); }
                , () => { cancelCallback(); });
  }
  alert(title:string,message:string,okCallback: (evt:string,value:string) => any){
    alertify.alert(title,message, () => { okCallback(document.getElementById("productName").textContent,"test"); })
  }
  deneme(title:string,message:string,okCallback: (evt:string,value:string) => any){
    alertify.alert(title,message, () => { okCallback("deneme","deneme"); })
  }
  alertCategory(title:string,message:string,okCallback: () => any){
    alertify.alert(title,message, () => { okCallback(); })
  }
  // type language=(mode:number)=> number;
  //   this.lang = 1;
  //   sessionStorage.setItem("lang","1")
  //   return this.lang
  // }

}