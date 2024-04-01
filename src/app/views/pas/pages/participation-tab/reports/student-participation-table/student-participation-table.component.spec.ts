import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParticipationTableComponent } from './student-participation-table.component';

describe('StudentParticipationTableComponent', () => {
  let component: StudentParticipationTableComponent;
  let fixture: ComponentFixture<StudentParticipationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentParticipationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentParticipationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
