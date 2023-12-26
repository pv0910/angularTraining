import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDepartmentComponent } from './research-department.component';

describe('ResearchDepartmentComponent', () => {
  let component: ResearchDepartmentComponent;
  let fixture: ComponentFixture<ResearchDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchDepartmentComponent]
    });
    fixture = TestBed.createComponent(ResearchDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
