import { Injectable } from '@angular/core';
import { Experience } from './experienceProfessionnelle'
import {EXPERIENCES} from './mock-experience'

@Injectable()
export class ExperienceService{
  getCategories(): Promise<Experience[]>{
    return Promise.resolve(EXPERIENCES);
  }
}
