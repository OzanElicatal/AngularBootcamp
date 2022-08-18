import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    ProductsComponent,
    CategoriesComponent,
    EmployeesComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
