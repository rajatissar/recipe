import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = new Recipe(
    'Recipe name 11',
    'Recipe description 11',
    'https://i.ytimg.com/vi/kSb62MGJSI4/maxresdefault.jpg'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
