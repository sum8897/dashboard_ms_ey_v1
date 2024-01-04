import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoAverageSchoolTableComponent } from './lo-average-school-table.component';

describe('LoAverageSchoolTableComponent', () => {
  let component: LoAverageSchoolTableComponent;
  let fixture: ComponentFixture<LoAverageSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoAverageSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoAverageSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
