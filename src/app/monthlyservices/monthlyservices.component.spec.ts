import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyservicesComponent } from './monthlyservices.component';

describe('MonthlyservicesComponent', () => {
  let component: MonthlyservicesComponent;
  let fixture: ComponentFixture<MonthlyservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyservicesComponent]
    });
    fixture = TestBed.createComponent(MonthlyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
