import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {
  ActivityPictureUploadInputComponent
} from "../activity-picture-upload-input/activity-picture-upload-input.component";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";
import {ActivityCreationService} from "../../domain/services/activity-creation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activity-creation-form',
  standalone: true,
  imports: [
    MatInputModule,
    ActivityPictureUploadInputComponent,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './activity-creation-form.component.html',
  styleUrl: './activity-creation-form.component.css'
})
export class ActivityCreationFormComponent {
  constructor(private formBuilder: FormBuilder, private activityCreationService : ActivityCreationService, private router: Router) {}

  activityCreationForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    location: ['', Validators.required],
    duration: [0, Validators.required],
    price: [0, Validators.required],
    picture: ['', Validators.required],
  })

  onFileUpload(filename: string): void {
    this.activityCreationForm.patchValue({picture: filename});
  }

  onSubmitActivityCreation() {
    if (this.activityCreationForm.valid) {
      // @ts-ignore
      const activityDto = new ActivityRequestDto(this.activityCreationForm.get('name').value, this.activityCreationForm.get('description').value, this.activityCreationForm.get('location').value, this.activityCreationForm.get('duration').value, this.activityCreationForm.get('price').value, this.activityCreationForm.get('picture').value);
      this.activityCreationService.createActivity(activityDto).subscribe((isCreated: boolean) => {
        if (isCreated) {
          this.router.navigate(["/home"]);
        }
      })
    }
  }
}
