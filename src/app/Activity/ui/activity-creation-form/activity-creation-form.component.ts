import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {
  ActivityPictureUploadInputComponent
} from "../activity-picture-upload-input/activity-picture-upload-input.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-activity-creation-form',
  standalone: true,
  imports: [
    MatInputModule,
    ActivityPictureUploadInputComponent,
    MatButtonModule
  ],
  templateUrl: './activity-creation-form.component.html',
  styleUrl: './activity-creation-form.component.css'
})
export class ActivityCreationFormComponent {

}
