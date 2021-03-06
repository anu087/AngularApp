import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute , Params, Route, Router} from '@angular/router';
import { RecipeService } from '../recipe-service';
import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.scss']
})
export class RecipieDetailComponent implements OnInit {
// @Input() recipe : Recipe
id : number;
recipe : Recipe;
  constructor(private recipeService : RecipeService,
              private route:ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
  // const id = this.route.snapshot.params['id'];
  this.route.params.subscribe(
    (params: Params)=>{
  this.id = +params['id'];
  this.recipe = this.recipeService.getRecipe(this.id);
    }

  )
  }
  onAddToShoppingList(){
this.recipeService.addIngToShoppingList(this.recipe.ingredients)
  }
  onEditMenu(){
    //this.router.navigate(['edit'] , {relativeTo : this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo : this.route}); 

  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
  }
}
