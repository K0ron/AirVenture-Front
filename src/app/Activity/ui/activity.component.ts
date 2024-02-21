import { Component } from '@angular/core';
import {ActivityCreationFormComponent} from "./activity-creation-form/activity-creation-form.component";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    ActivityCreationFormComponent
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

}
