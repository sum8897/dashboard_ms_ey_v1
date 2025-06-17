import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTypeGraphComponent } from './school-type-graph.component';

describe('SchoolTypeGraphComponent', () => {
  let component: SchoolTypeGraphComponent;
  let fixture: ComponentFixture<SchoolTypeGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTypeGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTypeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
