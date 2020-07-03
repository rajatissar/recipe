import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'recipe-list',
    component: RecipesComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
