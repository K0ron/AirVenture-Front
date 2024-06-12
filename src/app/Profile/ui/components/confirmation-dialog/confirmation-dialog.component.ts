import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../domain/services/user-service/user.service';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, 
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})

export class ConfirmationDialogComponent {
  
  showDefaultMessage: boolean = true;

  constructor (private userService: UserService, @Inject(MAT_DIALOG_DATA) public combinedData: any) {
  }

  confirmationUpdate() {
    this.userService.updateUser(this.combinedData.userData.id, this.combinedData.formData).subscribe(Data => {
    })
    this.showDefaultMessage = false;
  }
  
  showDefaultMessageOff(){
    this.showDefaultMessage = true;
  }
  
}
