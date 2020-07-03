import {
  Injectable,
  EventEmitter
} from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/modals/ingredient.modal';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe name 1',
      'Recipe description 1',
      'https://i.ytimg.com/vi/kSb62MGJSI4/maxresdefault.jpg',
      [
        new Ingredient(
          'Onion',
          '1'
        ),
        new Ingredient(
          'Tomato',
          '2'
        )
      ]
    ),
    new Recipe(
      'Recipe name 2',
      'Recipe description 2',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/09/dessert-main-image-molten-cake.jpg',
      [
        new Ingredient(
          'sugar',
          '1'
        ),
        new Ingredient(
          'milk',
          '2'
        )
      ]
    )];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
