import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepPriceComponent } from './servicep-price.component';

describe('ServicepPriceComponent', () => {
  let component: ServicepPriceComponent;
  let fixture: ComponentFixture<ServicepPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicepPriceComponent]
    });
    fixture = TestBed.createComponent(ServicepPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
