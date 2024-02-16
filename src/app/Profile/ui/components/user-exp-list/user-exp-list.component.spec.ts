import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpComponent } from './user-exp-list.component';

describe('UserExpComponent', () => {
  let component: UserExpComponent;
  let fixture: ComponentFixture<UserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
