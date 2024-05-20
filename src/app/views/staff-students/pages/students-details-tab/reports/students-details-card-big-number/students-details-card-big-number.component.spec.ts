import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailsCardBigNumberComponent } from './students-details-card-big-number.component';

describe('StudentsDetailsCardBigNumberComponent', () => {
  let component: StudentsDetailsCardBigNumberComponent;
  let fixture: ComponentFixture<StudentsDetailsCardBigNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDetailsCardBigNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDetailsCardBigNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
