import { Component, OnInit } from '@angular/core';
import { Categorie } from './app.categorie';
import {CategorieService} from './categorie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategorieService]
})
export class AppComponent implements OnInit {
  jumbotronTitle = 'Concepteur Développeur';
  leadText = 'Je propose une approche de résolution des problèmes, associé à une bonne communication. Je suis ouvert à tous nouveaux défis qui me donnent l\'occasion d\'élargir mes compétences au sein d\'une organisation dynamique. Flexible et enthousiaste, j’aime travailler en équipe et prendre des initiatives.';
  selectedCategorie: Categorie;
  categories: Categorie[];

  constructor(private categorieService:CategorieService){

  }

    ngOnInit() : void {
      //this.categories = this.categories.slice(0, 4)
      this.getCategories();
    }

    onSelect(categorie: Categorie): void {
      this.selectedCategorie = categorie;
    }

    getCategories(): void{
      this.categorieService.getCategories().then(categories=> this.categories = categories);
    }
}
