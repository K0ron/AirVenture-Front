import { Component, OnInit, Output, EventEmitter, Renderer2, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UserAvatarService } from '../../services/user-avatar-service/user-avatar.service';


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
  avatarIndexSelected: number | null = null;


  constructor(private serviceAvatar:UserAvatarService, private dialogRef: MatDialogRef<SelectAvatarImageComponent>){} //importa las referencia del pop up

  getUserFromService(){this.serviceAvatar.getAvatar().subscribe(UserFromDB => { //Usa el servicio httpClient para obtener las imágenes y establecerlas
    this.avatars = UserFromDB; 
    console.log(UserFromDB);})}
    
    onSelectAvatar(i:number){
    this.avatarSelected = this.avatars[i].url;//elige el avatar y los establece
  }


  selectedAvatarIndex(index: number): void {
    this.avatarIndexSelected = index;  // Update the selected item
  }

  onSendAndCloseAvatar():void {
    this.avatarSelectedToSend.emit(this.avatarSelected); //envía el avatar establecido
    this.dialogRef.close(); //cierra el pop-up
  }


  ngOnInit(){ 
   this.getUserFromService();
  }

}
