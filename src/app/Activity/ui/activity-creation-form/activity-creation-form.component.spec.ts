import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCreationFormComponent } from './activity-creation-form.component';

describe('ActivityCreationFormComponent', () => {
  let component: ActivityCreationFormComponent;
  let fixture: ComponentFixture<ActivityCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityCreationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
