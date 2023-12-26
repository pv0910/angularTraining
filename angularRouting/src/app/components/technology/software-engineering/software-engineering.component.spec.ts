import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineeringComponent } from './software-engineering.component';

describe('SoftwareEngineeringComponent', () => {
  let component: SoftwareEngineeringComponent;
  let fixture: ComponentFixture<SoftwareEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareEngineeringComponent]
    });
    fixture = TestBed.createComponent(SoftwareEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
