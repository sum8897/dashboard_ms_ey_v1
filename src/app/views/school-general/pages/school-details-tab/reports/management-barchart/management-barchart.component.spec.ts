import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBarchartComponent } from './management-barchart.component';

describe('ManagementBarchartComponent', () => {
  let component: ManagementBarchartComponent;
  let fixture: ComponentFixture<ManagementBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
