import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAvatarImageComponent } from './select-avatar-image.component';

describe('SelectAvatarImageComponent', () => {
  let component: SelectAvatarImageComponent;
  let fixture: ComponentFixture<SelectAvatarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAvatarImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAvatarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
