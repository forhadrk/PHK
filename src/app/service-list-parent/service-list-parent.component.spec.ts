import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListParentComponent } from './service-list-parent.component';

describe('ServiceListParentComponent', () => {
  let component: ServiceListParentComponent;
  let fixture: ComponentFixture<ServiceListParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceListParentComponent]
    });
    fixture = TestBed.createComponent(ServiceListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
