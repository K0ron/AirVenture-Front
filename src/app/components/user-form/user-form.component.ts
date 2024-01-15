import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user-model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnChanges{
  @Input() userFromPage: User;
  hide = true;

  editUserForm = this.fb.group({

    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]]
    });

  constructor(private fb: FormBuilder) { 
    this.userFromPage={firstName:"", lastName:"", email:"",password:"", telephone:0};
  
  }


  ngOnChanges(changes:SimpleChanges): void { //fonctionne avec les @Inputs et detecte tous les changements dans tous les @Inputs. changes est un objet qui permet voir les changements du Input.
    if(changes['userFromPage'].currentValue != changes['userFromPage'].previousValue){ //ici on compare s'il y a eu un changement entre la valeur précedente et l'actuelle
      console.log(changes) //grace a console log, on voit quel sort dobject c'est et comment acceder a ses proprietés
      this.userFromPage=changes['userFromPage'].currentValue[0] //ici on attribue la nouvelle valeur, qui vient dans un array.
      console.log(this.userFromPage)
      this.setFormValues();
      }
    } 

  setFormValues(){
    this.editUserForm.patchValue({
      firstName: this.userFromPage.firstName,
      lastName: this.userFromPage.lastName,
      email: this.userFromPage.email,
      })
      console.log(this.editUserForm.value)
  }
/*   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  } */


  onSubmit(){
    console.log(this.editUserForm.value)
  }

 

  

 
}