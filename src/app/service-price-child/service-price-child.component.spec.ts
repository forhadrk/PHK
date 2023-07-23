import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePriceChildComponent } from './service-price-child.component';

describe('ServicePriceChildComponent', () => {
  let component: ServicePriceChildComponent;
  let fixture: ComponentFixture<ServicePriceChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePriceChildComponent]
    });
    fixture = TestBed.createComponent(ServicePriceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
