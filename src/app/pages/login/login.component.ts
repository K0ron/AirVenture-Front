import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginService} from "../../services/login/login.service";
import {UserLoginData} from "../../models/UserLoginData";
import {UserSignupData} from "../../models/userSignupData";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatTabsModule, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginMode: boolean = true;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

  loginForm = this.formBuilder.group({
    email: ['',  [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmitLogin() {
    this.loginService.login(this.loginForm.value as UserLoginData).subscribe(
      response => {
      console.log(response);
    },
    error => {
      console.error('Error in login request', error);
      // Handle errors
    });
  }

  signupForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['',  [Validators.required, Validators.email]],
    password: ['', Validators.required],
    roles: [1, Validators.required]
  });

  onSubmitSignup() {
    this.loginService.register(this.signupForm.value as UserSignupData).subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.error('Error in signup request', error);
      // Handle errors
    });
  }
}
