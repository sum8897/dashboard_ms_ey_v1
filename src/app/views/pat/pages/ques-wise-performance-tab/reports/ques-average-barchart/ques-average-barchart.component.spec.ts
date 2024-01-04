import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesAverageBarchartComponent } from './ques-average-barchart.component';

describe('QuesAverageBarchartComponent', () => {
  let component: QuesAverageBarchartComponent;
  let fixture: ComponentFixture<QuesAverageBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesAverageBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesAverageBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
