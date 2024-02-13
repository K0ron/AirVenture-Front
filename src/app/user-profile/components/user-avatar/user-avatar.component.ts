import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog, MatDialogModule, 
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SelectAvatarImageComponent } from '../select-avatar-image/select-avatar-image.component';



@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.css'
})
export class UserAvatarComponent {

  avatar:string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  constructor(public dialog:MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SelectAvatarImageComponent); //abre el pop up

    dialogRef.componentInstance.avatarSelectedToSend.subscribe((result) => { //recibe el resultado del output de avatar image select y luego lo establece
      console.log(result);
      this.avatar=result;
    });
  }
 
    

  


}
