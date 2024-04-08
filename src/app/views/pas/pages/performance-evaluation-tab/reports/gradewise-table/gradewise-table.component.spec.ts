import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradewiseTableComponent } from './gradewise-table.component';

describe('GradewiseTableComponent', () => {
  let component: GradewiseTableComponent;
  let fixture: ComponentFixture<GradewiseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradewiseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradewiseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
