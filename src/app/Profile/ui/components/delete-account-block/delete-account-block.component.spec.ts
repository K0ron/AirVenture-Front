import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountBlockComponent } from './delete-account-block.component';

describe('DeleteAccountBlockComponent', () => {
  let component: DeleteAccountBlockComponent;
  let fixture: ComponentFixture<DeleteAccountBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAccountBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAccountBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
