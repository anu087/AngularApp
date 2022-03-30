import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe-service';
import { Recipe} from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})
export class RecipieListComponent implements OnInit, OnDestroy {
  recipes : Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
              private router : Router,
              private route :ActivatedRoute) { }

  ngOnInit(){
    this.subscription = this.recipeService.recipesChanged
   .subscribe(
     (recipe:Recipe[]) => {       
       
       this.recipes = recipe;
       console.log("subscribe" + this.recipes[0].description)
     }
   )
    this.recipes =  this.recipeService.getRecipes();

  }
//   onRecipeSelected(recipe : Recipe){
// this.recipeWasSelected.emit(recipe);
//   }
onNewRecipe()
{
  console.log("in");
  this.router.navigate(['new'] , { relativeTo : this.route});
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
