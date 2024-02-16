import {Component} from '@angular/core';
import {MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-register-error-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './register-error-modal.component.html',
  styleUrl: './register-error-modal.component.css'
})
export class RegisterErrorModalComponent {
}
