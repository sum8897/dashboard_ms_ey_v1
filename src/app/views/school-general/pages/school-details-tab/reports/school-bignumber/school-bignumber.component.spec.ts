import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBignumberComponent } from './school-bignumber.component';

describe('SchoolBignumberComponent', () => {
  let component: SchoolBignumberComponent;
  let fixture: ComponentFixture<SchoolBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
