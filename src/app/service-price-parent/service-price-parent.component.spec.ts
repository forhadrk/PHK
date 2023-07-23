import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePriceParentComponent } from './service-price-parent.component';

describe('ServicePriceParentComponent', () => {
  let component: ServicePriceParentComponent;
  let fixture: ComponentFixture<ServicePriceParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePriceParentComponent]
    });
    fixture = TestBed.createComponent(ServicePriceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
