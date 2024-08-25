import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBigNumberCardThreeComponent } from './school-big-number-card-three.component';

describe('SchoolBigNumberCardThreeComponent', () => {
  let component: SchoolBigNumberCardThreeComponent;
  let fixture: ComponentFixture<SchoolBigNumberCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBigNumberCardThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBigNumberCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
