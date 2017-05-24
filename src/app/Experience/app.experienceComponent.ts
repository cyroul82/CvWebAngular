import { Component, OnInit } from '@angular/core';
import {Experience} from './experience';
import {ExperienceService} from './experienceService';

@Component({
  selector: 'app-experience',
  templateUrl: './app.experienceComponent.html',
  styleUrls: ['./app.experienceComponent.css'],
  providers:[ExperienceService]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[];

  constructor (private experienceService: ExperienceService){

  }

  ngOnInit() : void {
    //this.categories = this.categories.slice(0, 4)
    this.getExperiences();
  }

  getExperiences(): void{
    this.experienceService.getExperiences().then(experiences=> this.experiences = experiences);
  }
}
