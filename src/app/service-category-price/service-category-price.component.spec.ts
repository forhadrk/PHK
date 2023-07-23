import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryPriceComponent } from './service-category-price.component';

describe('ServiceCategoryPriceComponent', () => {
  let component: ServiceCategoryPriceComponent;
  let fixture: ComponentFixture<ServiceCategoryPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCategoryPriceComponent]
    });
    fixture = TestBed.createComponent(ServiceCategoryPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
