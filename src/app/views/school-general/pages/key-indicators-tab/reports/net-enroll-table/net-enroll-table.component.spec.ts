import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetEnrollTableComponent } from './net-enroll-table.component';

describe('NetEnrollTableComponent', () => {
  let component: NetEnrollTableComponent;
  let fixture: ComponentFixture<NetEnrollTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetEnrollTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetEnrollTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
