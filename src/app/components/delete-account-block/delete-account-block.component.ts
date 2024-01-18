import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DeleteAccountComponent } from '../delete-account-dialog/delete-account-dialog.component';

@Component({
  selector: 'app-delete-account-block',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle, DeleteAccountBlockComponent],
  templateUrl: './delete-account-block.component.html',
  styleUrl: './delete-account-block.component.css'
})

export class DeleteAccountBlockComponent {

  constructor(public deleteDialog:MatDialog ){}


  openDeleteDialog(){
    this.deleteDialog.open(DeleteAccountComponent)
  }

}
