import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../Home/ui/components/card/card.component';
import { MatCard, MatCardModule } from '@angular/material/card';
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
  public userExpListFromPage:UserDatedActivity[] = [];

  ngOnChanges(changes:SimpleChanges): void { 
    if(changes['userExpListFromPage'].currentValue != changes['userExpListFromPage'].previousValue){ 
      //console.log(changes)
      this.userExpListFromPage=changes['userExpListFromPage'].currentValue
      }
    }
  }
