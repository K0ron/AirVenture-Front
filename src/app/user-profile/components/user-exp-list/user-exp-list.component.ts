import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { UserCard } from '../../shared/models/user-card';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-exp-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './user-exp-list.component.html',
  styleUrl: './user-exp-list.component.css'
})
export class UserExpListComponent implements OnChanges{

 /*  public showMore:boolean=true;
  public buttonText:string = "show more activities"; */

  @Input()
  public userExpListFromPage:UserCard[] = [];

/*   showMoreHandler() {
    this.showMore =! this.showMore;
    if (this.showMore==false) {
      this.buttonText = "show less activities" 
    }
  } */

  ngOnChanges(changes:SimpleChanges): void { //fonctionne avec les @Inputs et detecte tous les changements dans tous les @Inputs. changes est un objet qui permet voir les changements du Input.
    if(changes['userExpListFromPage'].currentValue != changes['userExpListFromPage'].previousValue){ //ici on compare s'il y a eu un changement entre la valeur précedente et l'actuelle
      console.log(changes) //grace a console log, on voit quel sort dobject c'est et comment acceder a ses proprietés
      this.userExpListFromPage=changes['userExpListFromPage'].currentValue //ici on attribue la nouvelle valeur, qui vient dans un array.
      console.log(this.userExpListFromPage)
      }
    } 

    
}
