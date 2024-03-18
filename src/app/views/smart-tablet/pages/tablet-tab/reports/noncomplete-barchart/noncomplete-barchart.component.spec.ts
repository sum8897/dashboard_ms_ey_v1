import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncompleteBarchartComponent } from './noncomplete-barchart.component';

describe('NoncompleteBarchartComponent', () => {
  let component: NoncompleteBarchartComponent;
  let fixture: ComponentFixture<NoncompleteBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoncompleteBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoncompleteBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
