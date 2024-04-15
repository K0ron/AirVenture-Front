import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../Home/ui/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserDatedActivity } from '../../../domain/models/user-dated-activity';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-user-exp-list',
  standalone: true,
  imports: [CardComponent, CommonModule, MatCardModule, MatIconModule, MatPaginatorModule],
  templateUrl: './user-exp-list.component.html',
  styleUrl: './user-exp-list.component.css'
})
export class UserExpListComponent implements OnChanges, OnInit{


  @Input()
  public recentActivitiesFromPage:UserDatedActivity[] = [];
  @Input()
  public futureActivitiesFromPage:UserDatedActivity[] = [];
  @Input()
  public allRecentActivitiesFromPage:UserDatedActivity[] = [];
  @Input()
  public allFutureActivitiesFromPage:UserDatedActivity[] = [];

  protected pagedRecentActivities: UserDatedActivity[] = [];
  protected pagedFutureActivities: UserDatedActivity[] = []; 
  protected recentPageSize = 3; 
  protected futurePageSize = 3; 
  protected recentPageSizeOptions: number[] = [1, 2, 3, 4, 5];
  protected futurePageSizeOptions: number[] = [1, 2, 3, 4, 5];
  protected recentPaginatorSize!:number;
  protected futurePaginatorSize!:number;


  ngOnChanges(changes: SimpleChanges): void {
    if ('recentActivitiesFromPage' in changes && changes['recentActivitiesFromPage'].currentValue !== undefined) {
      this.recentActivitiesFromPage = changes['recentActivitiesFromPage'].currentValue;
    }
    if ('futureActivitiesFromPage' in changes && changes['futureActivitiesFromPage'].currentValue !== undefined) {
      this.futureActivitiesFromPage = changes['futureActivitiesFromPage'].currentValue;
    }
  }
  
  onRecentActivitiesPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;   
    const endIndex = startIndex + event.pageSize;
    this.pagedRecentActivities = this.allRecentActivitiesFromPage.slice(startIndex, endIndex);
    this.recentPaginatorSize = Math.ceil(this.allRecentActivitiesFromPage.length / event.pageSize); 
  }

  onFutureActivitiesPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedFutureActivities = this.allFutureActivitiesFromPage.slice(startIndex, endIndex);
    this.futurePaginatorSize = Math.ceil(this.allFutureActivitiesFromPage.length / event.pageSize); 
  }

  ngOnInit(): void {
    this.recentPaginatorSize = Math.ceil(this.allRecentActivitiesFromPage.length / this.recentPageSize);
    this.futurePaginatorSize = Math.ceil(this.allFutureActivitiesFromPage.length / this.recentPageSize); 
    this.pagedRecentActivities = this.recentActivitiesFromPage;
    this.pagedFutureActivities = this.futureActivitiesFromPage;
  }

}