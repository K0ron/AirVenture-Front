import { Component, OnInit } from '@angular/core';
import { UserExpListComponent } from './components/user-exp-list/user-exp-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { User } from '../domain/models/user-model';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DeleteAccountBlockComponent } from './components/delete-account-block/delete-account-block.component';
import { UserLocalStorageHandlerService } from '../domain/services/user-local-storage/user-local-storage-handler.service';
import { Activity } from '../../Reservation/domain/model/Activity';
import { Reservation } from '../domain/models/reservation';
import { UserDatedActivity } from '../domain/models/user-dated-activity';

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
  protected user!: User;
  private allExp:UserDatedActivity[]=[];
  private noActivitiesMessage: string = "No activities yet";
  protected userReservations: Reservation[] = []; 
  protected userActivities:Activity[] = [];
  protected recentActivities:UserDatedActivity[] = [];
  protected futureActivities:UserDatedActivity[] = [];
  protected allRecentActivities:UserDatedActivity[] = [];
  protected allFutureActivities:UserDatedActivity[] = [];


  constructor(private userLocalStorageHandlerService:UserLocalStorageHandlerService, public deleteDialog:MatDialog ){}


  getUserActivitiesFromReservations(){
    this.userReservations = this.user.reservations;
    const getDate = new Date().getTime();
    const currentDate = new Date(getDate);

    if (this.userReservations !== null && this.userReservations !== undefined) {
      this.userReservations.forEach(reservation => {
        this.userActivities = reservation.activities;
        this.userActivities.forEach(element => {
          const userDatedActivity = new UserDatedActivity(
            element.id,
            element.continent,
            element.name,
            element.image,
            element.price,
            element.location,
            element.description,
            new Date (reservation.detaReservation)
          );
          this.allExp.push(userDatedActivity); 
        })
        this.recentActivities = this.allExp.filter(exp => {
          return exp.date.getTime() < currentDate.getTime();
        });
  
        this.futureActivities = this.allExp.filter(exp => {
          return exp.date.getTime() >= currentDate.getTime();
        });
      });
        this.allRecentActivities=this.recentActivities;
        this.allFutureActivities=this.futureActivities;

      this.recentActivities = this.recentActivities.slice(0,3);
      this.futureActivities = this.futureActivities.slice(0,3);
    } else {
      this.noActivitiesMessage;
    }
  } 

  ngOnInit(){
    this.user = this.userLocalStorageHandlerService.getUserFromLocalStorage(); 
    this.getUserActivitiesFromReservations();
  }

}
