import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPictureUploadInputComponent } from './activity-picture-upload-input.component';

describe('ActivityPictureUploadInputComponent', () => {
  let component: ActivityPictureUploadInputComponent;
  let fixture: ComponentFixture<ActivityPictureUploadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPictureUploadInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityPictureUploadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
