import { UserLocalStorageHandlerService } from './../domain/services/user-local-storage/user-local-storage-handler.service';
import { UserService } from './../domain/services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { UserExpListComponent } from './components/user-exp-list/user-exp-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { User } from '../domain/models/user-model';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { DeleteAccountBlockComponent } from './components/delete-account-block/delete-account-block.component';
import { Activity } from '../../Reservation/domain/model/Activity';
import { Reservation } from '../domain/models/reservation';
import { OnExit } from '../domain/guards/exit-profile-page.guard';
import { ConfirmationDialogExitComponent } from './components/confirmation-dialog-exit-without-saving/confirmation-exit-dialog.component';
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

export class UserProfilePageComponent implements OnInit, OnExit{
  protected user!: User;
  protected showActivities: boolean = false;
  private allExp:UserDatedActivity[]=[];
  private noActivitiesMessage: string = "No activities yet";
  protected userReservations: Reservation[] = []; 
  protected userActivities:Activity[] = [];
  protected recentActivities:UserDatedActivity[] = [];
  protected futureActivities:UserDatedActivity[] = [];
  protected allRecentActivities:UserDatedActivity[] = [];
  protected allFutureActivities:UserDatedActivity[] = [];
  protected dirtyForm: boolean = false;


  constructor(private UserLocalStorageHandlerService:UserLocalStorageHandlerService, public confirmationExitDialog: MatDialog, public userService: UserService, public deleteDialog:MatDialog ){}


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
          this.allExp = this.allExp.sort((a, b) => a.date.getTime() - b.date.getTime());
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

  getUser(): void {
    const userId = this.UserLocalStorageHandlerService.getUserIdFromLocalStorage();
    this.userService.getUserById(userId).subscribe(
      (data) => {
        this.user = data;
        this.getUserActivitiesFromReservations();
      },
      (error) => {
        console.error('Something went wrong', error);
      }
    );
  }

  activityHandler(){
    this.showActivities = !this.showActivities;
    console.log(this.showActivities)
  }

  onDirtyChanged(dirty: boolean): void {
    this.dirtyForm = dirty;
  }

  async onExit(): Promise<boolean> {
    if (this.dirtyForm == true) {
      const dialogRef = this.confirmationExitDialog.open(ConfirmationDialogExitComponent);
      return new Promise<boolean>((resolve) => {
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    }
    return true;
  }


  ngOnInit(){
    this.getUser();
  }

}
