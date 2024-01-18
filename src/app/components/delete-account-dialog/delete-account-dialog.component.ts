import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle],
  templateUrl: './delete-account-dialog.component.html',
  styleUrl: './delete-account-dialog.component.css'
})

export class DeleteAccountComponent {

}
