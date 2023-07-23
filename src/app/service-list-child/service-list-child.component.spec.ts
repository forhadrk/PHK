import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListChildComponent } from './service-list-child.component';

describe('ServiceListChildComponent', () => {
  let component: ServiceListChildComponent;
  let fixture: ComponentFixture<ServiceListChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceListChildComponent]
    });
    fixture = TestBed.createComponent(ServiceListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
