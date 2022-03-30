import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  loadedFeature = 'recipe';
  projectForm : FormGroup
  // onNavigation(feature:string){
  //  this.loadedFeature = feature;

  // }
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName' : new FormControl(
        null,
        [Validators.required,CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus' : new FormControl('critical'),
    })
  }
  onSaveProject(){
    console.log(this.projectForm.value);
  }
}