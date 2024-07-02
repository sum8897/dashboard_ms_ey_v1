import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSafetyComponent } from './school-safety.component';

describe('SchoolSafetyComponent', () => {
  let component: SchoolSafetyComponent;
  let fixture: ComponentFixture<SchoolSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSafetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
