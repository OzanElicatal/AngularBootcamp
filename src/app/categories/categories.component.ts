import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/services/category.service';
import { ICategory } from 'app/Models/icategory';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  
  model: any = {
    name: '',
    description:''
  }

  filterText: string= "";

  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.categoryService.getCategoriesList().subscribe(
      data => { this.categories = data; })
  };

}
