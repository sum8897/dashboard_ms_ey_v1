import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesAverageSchoolTableComponent } from './ques-average-school-table.component';

describe('QuesAverageSchoolTableComponent', () => {
  let component: QuesAverageSchoolTableComponent;
  let fixture: ComponentFixture<QuesAverageSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesAverageSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesAverageSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
