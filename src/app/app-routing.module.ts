import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component'
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
