import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrymodalComponent } from './entrymodal.component';

describe('EntrymodalComponent', () => {
  let component: EntrymodalComponent;
  let fixture: ComponentFixture<EntrymodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrymodalComponent]
    });
    fixture = TestBed.createComponent(EntrymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
