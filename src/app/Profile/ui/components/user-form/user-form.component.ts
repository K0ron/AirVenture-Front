import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../domain/models/user-model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnChanges {
  @Input() userFromPage: User;
  hide = true;

  editUserForm = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', []],
      phone: ['', [Validators.required]],
    },
    {}
  );


  constructor(private fb: FormBuilder, public confirmationDialog: MatDialog, public changePasswordDialog: MatDialog ) {
    this.userFromPage={id: 0, firstName:"", lastName:"", email:"",password:"", reservations:[]};
  }


  ngOnChanges(changes:SimpleChanges): void { //get changes
    if(changes['userFromPage'].currentValue != changes['userFromPage'].previousValue) { 
      this.setFormValues();
    }
  }

  setFormValues() {
    this.editUserForm.patchValue({
      firstName: this.userFromPage.firstName,
      lastName: this.userFromPage.lastName,
      email: this.userFromPage.email,
    })

  }

  openConfirmationDialog(): void {
    const userData = this.userFromPage;
    const formData = this.editUserForm.value;
  
    const combinedData = {
      userData: userData,
      formData: formData
    };
  
    this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: combinedData,
    });
  }
  openChangePasswordDialog(): void {
    this.changePasswordDialog.open(ChangePasswordDialogComponent);
  }

  onSubmit(){
    if(this.editUserForm.dirty)
    this.openConfirmationDialog();
}
