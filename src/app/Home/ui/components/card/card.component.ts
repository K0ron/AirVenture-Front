import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { Iactivity } from '../../../domain/models/Iactivity';
import { ActivityService } from '../../../domain/services/activity.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    SearchBarComponent,
    FilterComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  public activities: Iactivity[] = [];

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activityService
      .getAllActivities()
      .subscribe((data) => (this.activities = data));
  }
  getTotalDestinations() {
    return this.activities.length;
  }
  getEuropeDestinations() {
    return this.activities.filter((activity) => activity.continent === 'Europe')
      .length;
  }
  getAmeriqueDuNordDestinations() {
    return this.activities.filter(
      (activity) => activity.continent === 'Ameriquedunord'
    ).length;
  }
  getAmeriqueDuSudDestinations() {
    return this.activities.filter(
      (activity) => activity.continent === 'Ameriquedusud'
    ).length;
  }
  getAfriqueDestinations() {
    return this.activities.filter(
      (activity) => activity.continent === 'Afrique'
    ).length;
  }
  getAsieDestinations() {
    return this.activities.filter((activity) => activity.continent === 'Asie')
      .length;
  }

  destinationsCountRadioButton: string = 'all';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string) {
    this.destinationsCountRadioButton = data;
    console.log(this.destinationsCountRadioButton);
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
  redirectToReservationPage(id: number) {
    this.router.navigate(['/reservation', id]);
  }
}
