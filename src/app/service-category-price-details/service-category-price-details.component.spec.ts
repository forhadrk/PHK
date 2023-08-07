import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryPriceDetailsComponent } from './service-category-price-details.component';

describe('ServiceCategoryPriceDetailsComponent', () => {
  let component: ServiceCategoryPriceDetailsComponent;
  let fixture: ComponentFixture<ServiceCategoryPriceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCategoryPriceDetailsComponent]
    });
    fixture = TestBed.createComponent(ServiceCategoryPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
