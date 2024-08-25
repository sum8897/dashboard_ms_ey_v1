import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBigNumberCardOneComponent } from './school-big-number-card-one.component';

describe('SchoolBigNumberCardOneComponent', () => {
  let component: SchoolBigNumberCardOneComponent;
  let fixture: ComponentFixture<SchoolBigNumberCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBigNumberCardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBigNumberCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
