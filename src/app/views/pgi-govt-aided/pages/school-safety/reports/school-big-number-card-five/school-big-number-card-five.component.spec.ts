import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBigNumberCardFiveComponent } from './school-big-number-card-five.component';

describe('SchoolBigNumberCardFiveComponent', () => {
  let component: SchoolBigNumberCardFiveComponent;
  let fixture: ComponentFixture<SchoolBigNumberCardFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBigNumberCardFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBigNumberCardFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
