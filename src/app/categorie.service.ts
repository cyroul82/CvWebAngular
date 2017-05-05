import { Injectable } from '@angular/core';
import { Categorie } from './app.Categorie'
import {CATEGORIES} from './mock-categories'

@Injectable()
export class CategorieService{
  getCategories(): Promise<Categorie[]>{
    return Promise.resolve(CATEGORIES);
  }
}
