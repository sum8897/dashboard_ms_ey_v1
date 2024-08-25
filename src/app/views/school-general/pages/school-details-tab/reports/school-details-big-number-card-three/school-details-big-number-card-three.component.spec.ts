import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsBigNumberCardThreeComponent } from './school-details-big-number-card-three.component';

describe('SchoolDetailsBigNumberCardThreeComponent', () => {
  let component: SchoolDetailsBigNumberCardThreeComponent;
  let fixture: ComponentFixture<SchoolDetailsBigNumberCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDetailsBigNumberCardThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDetailsBigNumberCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
