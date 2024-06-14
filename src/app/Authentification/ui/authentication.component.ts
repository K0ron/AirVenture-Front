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
import {AuthenticationService} from "../domain/services/authentication.service";
import {Router} from "@angular/router";
import {LoginRequestDto} from "../domain/dto/login-request.dto";
import {SignupRequestDto} from "../domain/dto/signup-request.dto";
import {MatDialog} from "@angular/material/dialog";
import {RegisterErrorModalComponent} from "./components/register-error-modal/register-error-modal.component";
import { CustomValidators } from '../../customValidators';

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [MatFormFieldModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatTabsModule, NgIf, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
    constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router, public dialog: MatDialog) {
    }

    loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    onSubmitLogin() {
      if (this.loginForm.valid) {
        // @ts-ignore
        const loginDto = new LoginRequestDto(this.loginForm.get('email').value, this.loginForm.get('password').value);
        this.authenticationService.authenticate(loginDto.email, loginDto.password).subscribe((isLoggedIn: boolean) => {
          if (isLoggedIn) {
            this.router.navigate(["/home"]);
          }
        })
      }
    }

    signupForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [
          Validators.required,
          Validators.minLength(12),
          CustomValidators.atLeastOneNumber,  
          CustomValidators.atLeastOneLowercase, 
          CustomValidators.atLeastOneUppercase,
          CustomValidators.atLeastOneSpecialChar
        ]],
        roles: [1, Validators.required]
    });

    onSubmitSignup() {
        if (this.signupForm.valid) {
            // @ts-ignore
            const signupDto = new SignupRequestDto(this.signupForm.get('firstName')!.value, this.signupForm.get('lastName').value, this.signupForm.get('email').value, this.signupForm.get('password').value, Number(this.signupForm.get('roles').value));
            this.authenticationService.register(signupDto).subscribe((response) => {
                if(response) {
                  window.location.reload();
                } else {
                    this.dialog.open(RegisterErrorModalComponent);
                }
            })
        }
    }
}
