import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/modals/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
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

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
  }

}
