import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { RecipeService } from '../recipies/recipe-service';
import { Recipe } from '../recipies/recipie.model';

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
constructor(private http : HttpClient, private recipeService : RecipeService){}
storeRecipes(){
const recipes = this.recipeService.getRecipes();
this.http.put('https://angularapp-58c7e-default-rtdb.firebaseio.com/recipes.json', recipes)
.subscribe(response => {
    console.log(response);
})
}
fetchRecipes(){
    return this.http
    .get<Recipe[]>('https://angularapp-58c7e-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
        return recipes.map(recipe =>{
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        })
    }),
    tap(recipes =>{
        this.recipeService.setRecipes(recipes)
    })
    )
    // .subscribe(recipes => {
    //     this.recipeService.setRecipes(recipes)
    // })   
}
}