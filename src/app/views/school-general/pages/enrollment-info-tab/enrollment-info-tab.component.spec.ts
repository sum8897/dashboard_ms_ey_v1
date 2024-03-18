import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentInfoTabComponent } from './enrollment-info-tab.component';

describe('EnrollmentInfoTabComponent', () => {
  let component: EnrollmentInfoTabComponent;
  let fixture: ComponentFixture<EnrollmentInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentInfoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
