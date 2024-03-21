import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../Home/ui/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserDatedActivity } from '../../../domain/models/user-dated-activity';

@Component({
  selector: 'app-user-exp-list',
  standalone: true,
  imports: [CardComponent, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './user-exp-list.component.html',
  styleUrl: './user-exp-list.component.css'
})
export class UserExpListComponent implements OnChanges{

  @Input()
  public recentActivitiesFromPage:UserDatedActivity[] = [];
  @Input()
  public futureActivitiesFromPage:UserDatedActivity[] = [];
  @Input()
  public allRecentActivitiesFromPage:UserDatedActivity[] = [];
  @Input()
  public allFutureActivitiesFromPage:UserDatedActivity[] = [];
  protected recentButtonText:string = "show more recent activities";
  protected futureButtonText:string = "show more future activities";
  private showMoreRecent:boolean=true;
  private showMoreFuture:boolean=true;
  



  ngOnChanges(changes:SimpleChanges): void { 
    if(changes['recentActivitiesFromPage'].currentValue != changes['recentActivitiesFromPage'].previousValue){ 
      this.recentActivitiesFromPage=changes['recentActivitiesFromPage'].currentValue
    }
    if(changes['futureActivitiesFromPage'].currentValue != changes['futureActivitiesFromPage'].previousValue){ 
      this.futureActivitiesFromPage=changes['futureActivitiesFromPage'].currentValue
    }
  }

  showMoreRecentHandler() {
    this.showMoreRecent = !this.showMoreRecent;
    this.recentButtonText = this.showMoreRecent ? "show less recent activities" : "show more recent activities";

    if (this.showMoreRecent) {
        this.recentActivitiesFromPage = this.allRecentActivitiesFromPage.slice(0, 3);
    } else {
        this.recentActivitiesFromPage = this.allRecentActivitiesFromPage;
    }
  }

  showMoreFutureHandler() {
    this.showMoreFuture = !this.showMoreFuture;
    this.futureButtonText = this.showMoreFuture ? "show less future activities" : "show more future activities";

    if (this.showMoreFuture) {
        this.futureActivitiesFromPage = this.allFutureActivitiesFromPage.slice(0, 3);
    } else {
        this.futureActivitiesFromPage = this.allFutureActivitiesFromPage;
    }
  }
}