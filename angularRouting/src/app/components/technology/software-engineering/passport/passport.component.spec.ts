import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportComponent } from './passport.component';

describe('PassportComponent', () => {
  let component: PassportComponent;
  let fixture: ComponentFixture<PassportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassportComponent]
    });
    fixture = TestBed.createComponent(PassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
