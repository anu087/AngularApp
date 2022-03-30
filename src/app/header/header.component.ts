import { Component , EventEmitter, Output} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.-service';
//import {  EventEmitter} from 'Events';
@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent{
//     @Output() featureISelected = new EventEmitter<string>();
//     onSelect(feature : string){
// this.featureISelected.emit(feature);
//     }
constructor(private dataStorageService : DataStorageService){
    
}
onSaveData(){
    this.dataStorageService.storeRecipes();
}
onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
}
}