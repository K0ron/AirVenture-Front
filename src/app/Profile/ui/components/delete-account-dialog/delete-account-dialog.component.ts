import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { UserService } from '../../../domain/services/user-service/user.service';
import { UserLocalStorageHandlerService } from '../../../domain/services/user-local-storage/user-local-storage-handler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './delete-account-dialog.component.html',
  styleUrl: './delete-account-dialog.component.css'
})

export class DeleteAccountComponent {

  router: Router = inject(Router);
  showDefaultMessage: boolean = true;


  constructor(private userService:UserService, private userLocalStorageHandlerService:UserLocalStorageHandlerService) {
  }


  confirmationDelete() {
    this.userService.deleteUser(this.userLocalStorageHandlerService.getUserIdFromLocalStorage()).subscribe();
    localStorage.clear();
    this.showDefaultMessage = false;
    }

  
  closeAndGoToLogInPage(){
    this.showDefaultMessage = true;
    this.router.navigate(['/login']);
  }


}
