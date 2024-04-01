import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionWiseBarchartComponent } from './question-wise-barchart.component';

describe('QuestionWiseBarchartComponent', () => {
  let component: QuestionWiseBarchartComponent;
  let fixture: ComponentFixture<QuestionWiseBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionWiseBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionWiseBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
