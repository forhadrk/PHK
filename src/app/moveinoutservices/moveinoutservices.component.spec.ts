import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveinoutservicesComponent } from './moveinoutservices.component';

describe('MoveinoutservicesComponent', () => {
  let component: MoveinoutservicesComponent;
  let fixture: ComponentFixture<MoveinoutservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveinoutservicesComponent]
    });
    fixture = TestBed.createComponent(MoveinoutservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
