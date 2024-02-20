import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../../../domain/models/Activity';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { ACTIVITIES } from '../../../domain/services/mock-activities';
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
export class CardComponent {
  activities: Activity[] = ACTIVITIES;
  filteredDestinations: Activity[] = [];

  constructor(private router: Router) {
    this.filteredDestinations = this.activities;
  }

  getTotalDestinations() {
    return this.activities.length;
  }
  getEuropeDestinations() {
    return this.activities.filter((activity) => activity.continent === 'europe')
      .length;
  }
  getAmeriqueDuNordDestinations() {
    return this.activities.filter(
      (activity) => activity.continent === 'ameriquedunord'
    ).length;
  }
  getAmeriqueDuSudDestinations() {
    return this.activities.filter(
      (activity) => activity.continent === 'ameriquedusud'
    ).length;
  }
  getAfriqueDestinations() {
    return this.activities.filter(
      (activity) => activity.continent === 'afrique'
    ).length;
  }
  getAsieDestinations() {
    return this.activities.filter((activity) => activity.continent === 'asie')
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
