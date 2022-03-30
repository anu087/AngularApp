import { Component, ElementRef, OnInit, ViewChild,EventEmitter ,Output, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem: Ingredient;
// @ViewChild('nameInput') name : ElementRef;
// @ViewChild('amountInput') amount : ElementRef;
//@Output() ingAdded = new EventEmitter<Ingredient>();
  constructor(private slService : ShoppingService) { }

  ngOnInit(): void {
    this.subscription=this.slService.startedEditing
    .subscribe(
      (index: number)=> {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })

    }
    );
  }
  onSubmit(form:NgForm){
    const value = form.value;
// const ingName = this.name.nativeElement.value;
// const ingAmount = this.amount.nativeElement.value;
//const newIng = new Ingredient(ingName,ingAmount);
const newIng = new Ingredient(value.name,value.amount);
//this.ingAdded.emit(newIng);
if(this.editMode){
  this.slService.updatIngredient(this.editedItemIndex, newIng)
}
else{
  this.slService.addIngredient(newIng);
}
this.editMode = false;
form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
 this.onClear()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
