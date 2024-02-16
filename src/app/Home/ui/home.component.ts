import { Component } from '@angular/core';
import { HeaderComponent } from '../../Header/header.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeaderComponent, CardComponent],
})
export class HomeComponent {}
