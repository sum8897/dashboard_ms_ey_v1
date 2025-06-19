import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusTableComponent } from './overall-status-table.component';

describe('OverallStatusTableComponent', () => {
  let component: OverallStatusTableComponent;
  let fixture: ComponentFixture<OverallStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
