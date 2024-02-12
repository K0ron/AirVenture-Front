import { Component, OnInit } from '@angular/core';
import { UserExpListComponent } from '../../components/user-exp-list/user-exp-list.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { User } from '../../models/user-model';
import { UserService } from '../../services/user-service/user.service';
import { CommonModule } from '@angular/common';
import { UserExpService } from '../../services/user-exp-service/user-exp.service';
import { UserCard } from '../../models/user-card';
import { UserAvatarComponent } from '../../components/user-avatar/user-avatar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DeleteAccountBlockComponent } from '../../components/delete-account-block/delete-account-block.component';

@Component({
    selector: 'app-user-profile-page',
    standalone: true,
    templateUrl: './user-profile-page.component.html',
    styleUrl: './user-profile-page.component.css',
    imports: [UserExpListComponent, UserFormComponent, CommonModule, UserAvatarComponent, MatButtonModule, MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle, DeleteAccountBlockComponent]
})

export class UserProfilePageComponent implements OnInit{
  public user!: User;
  userExpList:UserCard[] = [];
  public showMore:boolean=true;
  public buttonText:string = "show more activities";
  public allExp:UserCard[]=[];


  constructor(private serviceUser:UserService, private serviceUserExp:UserExpService, public deleteDialog:MatDialog ){}

  getUserFromService(){this.serviceUser.getUser().subscribe(UserFromDB => {
    this.user = UserFromDB; 
    console.log("this.user");})}
  
  getUserFromExpService(){
    this.serviceUserExp.getUserExp().subscribe(ExpsFromDB => {
      this.userExpList = ExpsFromDB;
      this.allExp = this.userExpList;
      this.userExpList = this.userExpList.slice(-3);
    })
  }
 

  showMoreHandler() {
    this.showMore = !this.showMore;
    if (this.showMore==true) {
      this.userExpList = this.userExpList.slice(-3);}
    else {
      this.buttonText = "show less activities";
      this.userExpList= this.allExp
    } 
  }
  
  ngOnInit(){ 
    this.getUserFromService();
    this.getUserFromExpService();
  }

} 
