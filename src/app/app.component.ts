import { Component, OnInit } from '@angular/core';
import { Categorie } from './app.categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jumbotronTitle = 'Concepteur Développeur';
  leadText = 'Je propose une approche de résolution des problèmes, associé à une bonne communication. Je suis ouvert à tous nouveaux défis qui me donnent l\'occasion d\'élargir mes compétences au sein d\'une organisation dynamique. Flexible et enthousiaste, j’aime travailler en équipe et prendre des initiatives.';
  selectedCategorie: Categorie;
  categories = [
      {id: 1, name: 'Expériences', path:'experience'},
      {id: 2, name: 'Etudes',path:'etude'},
      {id: 3, name: 'Compétences', path:'competence'},
      {id: 4, name: 'Divers', path:'divers'}
    ];

    ngOnInit() : void {
      this.categories = this.categories.slice(0, 4);
    }
    
    onSelect(categorie: Categorie): void {
      this.selectedCategorie = categorie;
    }
}
