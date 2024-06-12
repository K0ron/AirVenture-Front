import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from './../../../domain/services/user-service/user.service';
import { ChangePasswordDTO } from './../../../domain/models/change-password-dto';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomValidators } from '../../../../customValidators';
import { UserLocalStorageHandlerService } from '../../../domain/services/user-local-storage/user-local-storage-handler.service';

@Component({
  selector: 'app-change-password-dialog',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.css'
})
export class ChangePasswordDialogComponent {

  packPassword!:ChangePasswordDTO;
  wrongPasswordErrorMessage:string = "Wrong password";
  wrongPasswordErrorMessageHandler:boolean= false;  
  otherErrorsMessage:string = "An unexpected error occurredm the password could no be saved";
  otherErrorMessageHandler:boolean= false;  
  showDefaultMessage:boolean = true;

  hide1 = true;
  hide2 = true;
  hide3 = true;


  constructor(private fb: FormBuilder, private userService:UserService, private UserLocalStorageHandlerService:UserLocalStorageHandlerService, private dialogRef: MatDialogRef<ChangePasswordDialogComponent>){}

  passwordChangeForm = this.fb.group({

    oldPassword: ["", [Validators.required]],
    newPassword: ["", [Validators.required]],
    repeatedPassword: ["", [Validators.required]]
  },
  {
    validators: [CustomValidators.mustBeEqual('newPassword', 'repeatedPassword'), CustomValidators.mustBeDifferent('oldPassword', 'newPassword')]
  });

  getPasswords():ChangePasswordDTO {
    const oldPasswordControl = this.passwordChangeForm.get('oldPassword')?.value
    const newPasswordControl = this.passwordChangeForm.get('newPassword')?.value
    let PackPasswordBeforeChanges : ChangePasswordDTO = {password : "", newPassword:""}
    if (oldPasswordControl && newPasswordControl) {
      PackPasswordBeforeChanges.password = oldPasswordControl;
      PackPasswordBeforeChanges.newPassword = newPasswordControl;
    }
    this.packPassword = PackPasswordBeforeChanges;
    console.log(this.packPassword)
    return this.packPassword;
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

  hideWrongPasswordError() {
    this.wrongPasswordErrorMessageHandler = false;
  }


  onSubmit() {
    this.packPassword = this.getPasswords();
    const id = this.UserLocalStorageHandlerService.getUserIdFromLocalStorage();
    this.userService.changePassword(id, this.packPassword).subscribe(
      (response) => {
        console.log(response, "password updated");
        this.showDefaultMessage = false;
      },
      (error) => {
        console.log(error.message)
        if (error.status === 400) {
            this.wrongPasswordErrorMessageHandler = true;
        } else {
          this.otherErrorMessageHandler =true;
        }
      }
    );
  }
 }
