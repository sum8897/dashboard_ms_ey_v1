import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsBigNumberCardOneComponent } from './school-details-big-number-card-one.component';

describe('SchoolDetailsBigNumberCardOneComponent', () => {
  let component: SchoolDetailsBigNumberCardOneComponent;
  let fixture: ComponentFixture<SchoolDetailsBigNumberCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDetailsBigNumberCardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDetailsBigNumberCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
