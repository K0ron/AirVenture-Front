import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../domain/models/destination';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterComponent } from '../filter/filter.component';

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
  destinations: Destination[] = [
    {
      type: 'outFrance',
      name: 'Parachute',
      country: 'USA',
      image:
        'https://images.pexels.com/photos/7259161/pexels-photo-7259161.jpeg',
      price: 10.0,
      location: 'Salt Lake City, Utah',
    },
    {
      type: 'outFrance',
      name: 'Hiking',
      country: 'Chili',
      image:
        'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 9.99,
      location: 'Torres del Paine, Chili',
    },
    {
      type: 'outFrance',
      name: 'Roadtrip',
      country: 'Italy',
      image:
        'https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 17.5,
      location: 'Tuscany',
    },
    {
      type: 'outFrance',
      name: 'Astrophoto',
      country: 'Chili',
      image:
        'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 24.5,
      location: 'Atacama Desert, Chili',
    },
    {
      type: 'france',
      name: 'Parachute',
      country: 'France',
      image:
        'https://images.pexels.com/photos/67298/parachute-paratrooper-parachutist-land-67298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 11.99,
      location: 'Normandy',
    },
  ];
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
