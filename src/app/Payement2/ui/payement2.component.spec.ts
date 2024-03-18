import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementComponent2 } from './payement2.component';

describe('PayementComponent', () => {
  let component: PayementComponent2;
  let fixture: ComponentFixture<PayementComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayementComponent2],
    }).compileComponents();

    fixture = TestBed.createComponent(PayementComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
