import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipes: Recipe[] = [new Recipe(
    'Recipe name 1',
    'Recipe description 1',
    'https://i.ytimg.com/vi/kSb62MGJSI4/maxresdefault.jpg'
  ),
  new Recipe(
    'Recipe name 2',
    'Recipe description 2',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/09/dessert-main-image-molten-cake.jpg'
  )];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
