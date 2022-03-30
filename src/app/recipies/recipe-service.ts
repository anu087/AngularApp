import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipies/recipie.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable()
export class RecipeService{
    //recipeSelected = new EventEmitter<Recipe>();
    //recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    // private recipes : Recipe[] = [
    //     new Recipe(
    //     'Burger',
    //     'only a test',
    //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    //     [
    //         new Ingredient('Meat',1),
    //         new Ingredient('rench fries', 8)
    //     ]
    //     ),
    //     new Recipe(
    //         'Chat pat',
    //         'only test',
    //         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    //         [
    //             new Ingredient('Pork',3),
    //             new Ingredient('french fries', 5)
    //         ]
    //         )
    //   ];
      private recipes: Recipe[] = [];
      constructor(private slService : ShoppingService){}

      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
    return this.recipes.slice()[index];
      }
      setRecipes(recipes :Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
      }
      addIngToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngs(ingredients);
      }
        addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
deleteRecipe(index: number){
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
}