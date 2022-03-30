import { Component, Input, OnInit, Output ,EventEmitter  } from '@angular/core';
import { RecipeService } from '../../recipe-service';
//import { EventEmitter } from 'stream';
import { Recipe } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {
 @Input() recipe : Recipe;
//  @Output() recipeSelected = new EventEmitter<void>();
  // constructor(private recipeService : RecipeService) { }
@Input() index : number;
  ngOnInit(): void {
  }

  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
