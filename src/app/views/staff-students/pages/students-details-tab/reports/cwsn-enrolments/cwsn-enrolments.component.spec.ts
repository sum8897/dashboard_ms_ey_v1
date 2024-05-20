import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwsnEnrolmentsComponent } from './cwsn-enrolments.component';

describe('CwsnEnrolmentsComponent', () => {
  let component: CwsnEnrolmentsComponent;
  let fixture: ComponentFixture<CwsnEnrolmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwsnEnrolmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwsnEnrolmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
