import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailsTabComponent } from './students-details-tab.component';

describe('StudentsDetailsTabComponent', () => {
  let component: StudentsDetailsTabComponent;
  let fixture: ComponentFixture<StudentsDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
