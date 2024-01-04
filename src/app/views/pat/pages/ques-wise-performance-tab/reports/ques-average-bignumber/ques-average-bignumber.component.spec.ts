import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesAverageBignumberComponent } from './ques-average-bignumber.component';

describe('QuesAverageBignumberComponent', () => {
  let component: QuesAverageBignumberComponent;
  let fixture: ComponentFixture<QuesAverageBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesAverageBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesAverageBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
