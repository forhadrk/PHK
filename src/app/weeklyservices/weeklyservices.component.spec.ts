import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyservicesComponent } from './weeklyservices.component';

describe('WeeklyservicesComponent', () => {
  let component: WeeklyservicesComponent;
  let fixture: ComponentFixture<WeeklyservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyservicesComponent]
    });
    fixture = TestBed.createComponent(WeeklyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
