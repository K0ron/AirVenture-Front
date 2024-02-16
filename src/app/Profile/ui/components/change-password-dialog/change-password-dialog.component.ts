import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomValidators } from '../../../../customValidators';

@Component({
  selector: 'app-change-password-dialog',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.css'
})
export class ChangePasswordDialogComponent {

  hide1 = true;
  hide2 = true;
  hide3 = true;

  constructor(private fb: FormBuilder,){}

passwordChangeForm = this.fb.group({

    oldPassword: ["", [Validators.required]],
    newPassword: ["", [Validators.required]],
    repeatedPassword: ["", [Validators.required]]
  },
  {
    validators: CustomValidators.mustBeEqual('newPassword', 'repeatedPassword')
    });

  onSubmit(){
    console.log(this.passwordChangeForm.value)
  }

 }
