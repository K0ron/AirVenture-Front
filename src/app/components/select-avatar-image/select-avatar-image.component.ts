import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-select-avatar-image',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './select-avatar-image.component.html',
  styleUrl: './select-avatar-image.component.css'
})
export class SelectAvatarImageComponent implements OnInit{

  avatars!:any [];
  avatarSelected!:string;
  @Output() avatarSelectedToSend = new EventEmitter<any>();

  constructor(private serviceUser:UserService, private dialogRef: MatDialogRef<SelectAvatarImageComponent>){} //importa las referencia del pop up

  getUserFromService(){this.serviceUser.getUser(this.serviceUser.imageEndPoint).subscribe(UserFromDB => { //Usa el servicio httpClient para obtener las imágenes y establecerlas
    this.avatars = UserFromDB; 
    console.log(UserFromDB);})}
    
    onSelectAvatar(i:number){
    this.avatarSelected = this.avatars[i].url; //elige el avatar y los establece
  }

  sendAndCloseAvatar():void {
    this.avatarSelectedToSend.emit(this.avatarSelected); //envía el avatar establecido
    this.dialogRef.close(); //cierra el pop-up
    }


  
  

ngOnInit(){ 
  this.getUserFromService();
}

}
