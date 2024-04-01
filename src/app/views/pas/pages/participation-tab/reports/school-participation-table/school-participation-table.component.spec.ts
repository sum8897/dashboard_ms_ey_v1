import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolParticipationTableComponent } from './school-participation-table.component';

describe('SchoolParticipationTableComponent', () => {
  let component: SchoolParticipationTableComponent;
  let fixture: ComponentFixture<SchoolParticipationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolParticipationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolParticipationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
