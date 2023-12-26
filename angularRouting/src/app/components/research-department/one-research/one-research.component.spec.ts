import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneResearchComponent } from './one-research.component';

describe('OneResearchComponent', () => {
  let component: OneResearchComponent;
  let fixture: ComponentFixture<OneResearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneResearchComponent]
    });
    fixture = TestBed.createComponent(OneResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
