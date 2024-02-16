import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../../domain/models/destination';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { DESTINATIONS } from '../../../domain/services/mock-destinations';

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
  destinations: Destination[] = DESTINATIONS;
  filteredDestinations: Destination[] = [];

  constructor() {
    this.filteredDestinations = this.destinations;
  }

  getTotalDestinations() {
    return this.destinations.length;
  }
  getFranceDestinations() {
    return this.destinations.filter(
      (destination) => destination.type === 'france'
    ).length;
  }
  getOutFranceDestinations() {
    return this.destinations.filter(
      (destination) => destination.type === 'outFrance'
    ).length;
  }
  getCanadaDestinations() {
    return this.destinations.filter(
      (destination) => destination.type === 'canada'
    ).length;
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
}
