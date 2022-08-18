import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component'
import { ContactComponent } from './contact/contact.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'home', component: HomepageComponent, canActivate: [LoginGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categories', component: CategoriesComponent, canActivate: [LoginGuard]},
  {path: 'employees', component: EmployeesComponent, canActivate: [LoginGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
