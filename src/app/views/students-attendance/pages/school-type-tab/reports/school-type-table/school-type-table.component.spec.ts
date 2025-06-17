import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTypeTableComponent } from './school-type-table.component';

describe('SchoolTypeTableComponent', () => {
  let component: SchoolTypeTableComponent;
  let fixture: ComponentFixture<SchoolTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTypeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
