import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveServicesComponent } from './save-services.component';

describe('SaveServicesComponent', () => {
  let component: SaveServicesComponent;
  let fixture: ComponentFixture<SaveServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveServicesComponent]
    });
    fixture = TestBed.createComponent(SaveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
