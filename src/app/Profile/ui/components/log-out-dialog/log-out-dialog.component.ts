import { AuthenticationService } from './../../../../Authentification/domain/services/authentication.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-out-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle],
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.css'
})
export class LogOutDialogComponent {

  router: Router = inject(Router);
  showDefaultMessage: boolean = true;


  constructor(private cookieService: CookieService, private authenticationService:AuthenticationService) {
  }

  borrarToken() {
/*   const allCookies = this.cookieService.getAll()
 */  const cookieExists: boolean = this.cookieService.check('test');

console.log(cookieExists);
  }

  clearCookieAndLocalStorage(): void {
/*     this.authenticationService.logout(); clean cookies
 */    localStorage.clear();
    this.showDefaultMessage = false;
  }

  closeAndGoToLogInPage() {
  this.showDefaultMessage = true;
  this.router.navigate(['/login']);
  }
}
