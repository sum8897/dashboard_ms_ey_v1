import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGeneralComponent } from './school-general.component';

describe('SchoolGeneralComponent', () => {
  let component: SchoolGeneralComponent;
  let fixture: ComponentFixture<SchoolGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
