import { Component, OnInit } from '@angular/core';
import { Categorie } from './app.categorie';
import {CategorieService} from './categorie.service';
import { HeaderComponent} from './app.headerComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategorieService, HeaderComponent]
})
export class AppComponent implements OnInit {
  selectedCategorie: Categorie;
  categories: Categorie[];

  constructor(private categorieService:CategorieService, private headerComponent:HeaderComponent){

  }

    ngOnInit() : void {
      //this.categories = this.categories.slice(0, 4)
      this.getCategories();
    }

    onSelect(categorie: Categorie): void {
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
