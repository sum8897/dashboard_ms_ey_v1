import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInfraComponent } from './school-infra.component';

describe('SchoolInfraComponent', () => {
  let component: SchoolInfraComponent;
  let fixture: ComponentFixture<SchoolInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
