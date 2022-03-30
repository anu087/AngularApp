import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies/recipie.model'
import { RecipeService } from './recipe-service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
  
})
export class RecipiesComponent implements OnInit {
//selectedRecipe: Recipe;
  //constructor(private recipeService : RecipeService) { }
  constructor() { }

  ngOnInit(): void {
  //   this.recipeService.recipeSelected
  // .subscribe(
  //   (recipe : Recipe) => {
  //     this.selectedRecipe = recipe;
  //   }
  // )
  }
  

}
