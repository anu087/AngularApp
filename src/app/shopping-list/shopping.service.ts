import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients : Ingredient [] = [
    new Ingredient('Apple',5),
    new Ingredient('Oranges',59)
  ] ;
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(index : number){
    return this.ingredients[index];
  }
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    //this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngs(ing : Ingredient[]){
    this.ingredients.push(...ing)
this.ingredientsChanged.next(this.ingredients.slice());
//this.ingredientsChanged.emit(this.ingredients.slice());
  }
  updatIngredient(index: number , newIngredient :Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
  }
}
