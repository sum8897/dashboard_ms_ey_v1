import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBigNumberCardFourComponent } from './school-big-number-card-four.component';

describe('SchoolBigNumberCardFourComponent', () => {
  let component: SchoolBigNumberCardFourComponent;
  let fixture: ComponentFixture<SchoolBigNumberCardFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBigNumberCardFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBigNumberCardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
