import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderFirstTableComponent } from './gender-first-table.component';

describe('GenderFirstTableComponent', () => {
  let component: GenderFirstTableComponent;
  let fixture: ComponentFixture<GenderFirstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderFirstTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderFirstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
