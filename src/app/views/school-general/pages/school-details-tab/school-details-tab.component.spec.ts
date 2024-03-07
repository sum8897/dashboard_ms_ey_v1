import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsTabComponent } from './school-details-tab.component';

describe('SchoolDetailsTabComponent', () => {
  let component: SchoolDetailsTabComponent;
  let fixture: ComponentFixture<SchoolDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
