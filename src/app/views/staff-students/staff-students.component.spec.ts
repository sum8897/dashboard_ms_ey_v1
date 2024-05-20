import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStudentsComponent } from './staff-students.component';

describe('StaffStudentsComponent', () => {
  let component: StaffStudentsComponent;
  let fixture: ComponentFixture<StaffStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
