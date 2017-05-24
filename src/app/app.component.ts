import { Component, OnInit } from '@angular/core';
import { Category } from './Category/category';
import {CategoryService} from './Category/categoryService';
import { HeaderComponent} from './Header/app.headerComponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService, HeaderComponent]
})
export class AppComponent implements OnInit {
  selectedCategorie: Category;
  categories: Category[];

  constructor(private categorieService:CategoryService, private headerComponent:HeaderComponent){

  }

    ngOnInit() : void {
      //this.categories = this.categories.slice(0, 4)
      this.getCategories();
    }

    onSelect(categorie: Category): void {
      this.selectedCategorie = categorie;
      this.toggleHeader(true);
    }

    getCategories(): void{
      this.categorieService.getCategories().then(categories=> this.categories = categories);
    }

   toggleHeader(tag: boolean): void{
      this.headerComponent.hide = tag;
    }

}
