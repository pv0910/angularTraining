import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PP3Component } from './pp3.component';

describe('PP3Component', () => {
  let component: PP3Component;
  let fixture: ComponentFixture<PP3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PP3Component]
    });
    fixture = TestBed.createComponent(PP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
