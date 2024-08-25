import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsBigNumberCardFourComponent } from './school-details-big-number-card-four.component';

describe('SchoolDetailsBigNumberCardFourComponent', () => {
  let component: SchoolDetailsBigNumberCardFourComponent;
  let fixture: ComponentFixture<SchoolDetailsBigNumberCardFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDetailsBigNumberCardFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDetailsBigNumberCardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
