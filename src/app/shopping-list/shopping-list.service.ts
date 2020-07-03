import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/modals/ingredient.modal';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient(
      'Onion',
      '1'
    ),
    new Ingredient(
      'Tomato',
      '2'
    )
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
  }
}
