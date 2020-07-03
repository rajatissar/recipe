import {
  Injectable,
  EventEmitter
} from '@angular/core';

// models
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/modals/ingredient.modal';
// services
import { ShoppingListService } from '../shopping-list/shopping-list.service';

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

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes;
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
