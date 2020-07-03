import {
  Component,
  OnInit,
  Input
} from '@angular/core';

// models
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/modals/ingredient.modal';
// services
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientToShoppingList(ingredients);
  }

}
