import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsBigNumberCardTwoComponent } from './school-details-big-number-card-two.component';

describe('SchoolDetailsBigNumberCardTwoComponent', () => {
  let component: SchoolDetailsBigNumberCardTwoComponent;
  let fixture: ComponentFixture<SchoolDetailsBigNumberCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDetailsBigNumberCardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDetailsBigNumberCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
