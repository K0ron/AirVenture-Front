import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-activity-picture-upload-input',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressBarModule,
    NgIf
  ],
  templateUrl: './activity-picture-upload-input.component.html',
  styleUrl: './activity-picture-upload-input.component.css'
})
export class ActivityPictureUploadInputComponent {
  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('fileInput') fileInput: any;
  filename: string = 'No file selected';
  isFileSelected: boolean = false;

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.filename = event.target.files[0].name;
      this.isFileSelected = true;
      this.dataChange.emit(this.filename);
    } else {
      this.filename = 'No file selected';
      this.isFileSelected = false;
      this.dataChange.emit(undefined);
    }
  }

  deleteFile() {
    this.filename = 'No file selected';
    this.fileInput.nativeElement.value = '';
    this.isFileSelected = false;
    this.dataChange.emit(undefined);
  }
}
