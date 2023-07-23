import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWiseCategoryComponent } from './service-wise-category.component';

describe('ServiceWiseCategoryComponent', () => {
  let component: ServiceWiseCategoryComponent;
  let fixture: ComponentFixture<ServiceWiseCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceWiseCategoryComponent]
    });
    fixture = TestBed.createComponent(ServiceWiseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
