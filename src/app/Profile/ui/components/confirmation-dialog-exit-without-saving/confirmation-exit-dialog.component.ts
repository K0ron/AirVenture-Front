import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, 
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,],
  templateUrl: './confirmation-exit-dialog.component.html',
  styleUrl: './confirmation-exit-dialog.component.css'
})

export class ConfirmationDialogExitComponent {
  
  showDefaultMessage: boolean = true;

  constructor (private dialogRef: MatDialogRef<ConfirmationDialogExitComponent>) {
  }

  confirmationExit(): void {
    this.dialogRef.close(true)
  }
  
  cancelExit(): void {
    this.dialogRef.close(false)
  }

}
