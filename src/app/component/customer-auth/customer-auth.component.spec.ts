import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAuthComponent } from './customer-auth.component';

describe('CustomerAuthComponent', () => {
  let component: CustomerAuthComponent;
  let fixture: ComponentFixture<CustomerAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAuthComponent]
    });
    fixture = TestBed.createComponent(CustomerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
