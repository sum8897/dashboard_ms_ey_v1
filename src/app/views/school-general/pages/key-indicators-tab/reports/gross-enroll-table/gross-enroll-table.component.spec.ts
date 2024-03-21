import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossEnrollTableComponent } from './gross-enroll-table.component';

describe('GrossEnrollTableComponent', () => {
  let component: GrossEnrollTableComponent;
  let fixture: ComponentFixture<GrossEnrollTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossEnrollTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrossEnrollTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
