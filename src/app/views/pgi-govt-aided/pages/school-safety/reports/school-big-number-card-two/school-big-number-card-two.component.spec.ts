import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBigNumberCardTwoComponent } from './school-big-number-card-two.component';

describe('SchoolBigNumberCardTwoComponent', () => {
  let component: SchoolBigNumberCardTwoComponent;
  let fixture: ComponentFixture<SchoolBigNumberCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBigNumberCardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBigNumberCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
