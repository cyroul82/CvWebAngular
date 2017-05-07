import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.headerComponent.html',
  styleUrls: ['./app.headerComponent.css'],
})
export class HeaderComponent{
  jumbotronTitle = 'Concepteur Développeur';
  leadText = 'Je propose une approche de résolution des problèmes, associé à une bonne communication. Je suis ouvert à tous nouveaux défis qui me donnent l\'occasion d\'élargir mes compétences au sein d\'une organisation dynamique. Flexible et enthousiaste, j’aime travailler en équipe et prendre des initiatives.';
  hide: boolean;
  constructor(){
    this.hide = false;
  }

  toggle(){
    this.hide = !this.hide;
  }
}
