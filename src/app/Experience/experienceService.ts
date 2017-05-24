import { Injectable } from '@angular/core';
import { Experience } from './experience';
import {EXPERIENCES} from './mock-experience';

@Injectable()
export class ExperienceService{

  getExperiences(): Promise<Experience[]>{
    return Promise.resolve(EXPERIENCES);
  }

}
