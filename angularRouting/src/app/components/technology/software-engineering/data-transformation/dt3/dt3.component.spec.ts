import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DT3Component } from './dt3.component';

describe('DT3Component', () => {
  let component: DT3Component;
  let fixture: ComponentFixture<DT3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DT3Component]
    });
    fixture = TestBed.createComponent(DT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
