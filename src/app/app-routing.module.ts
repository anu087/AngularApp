import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipies/recipes-resolver-service';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path : '', redirectTo:'/recipes', pathMatch:'full'},
  {path : 'recipes', component: RecipiesComponent, children :[
    {path:'', component: RecipeStartComponent}, 
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecipieDetailComponent,resolve : [RecipesResolverService]},
    {path:':id/edit', component: RecipeEditComponent, resolve : [RecipesResolverService]}
  ]},
  {path : 'shopping-list', component: ShoppingListComponent },
  {path : 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
