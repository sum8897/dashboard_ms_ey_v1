import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentAverageAbsentBignumberComponent } from "./student-average-absent-bignumber.component";

describe("StudentAverageAbsentBignumberComponent", () => {
  let component: StudentAverageAbsentBignumberComponent;
  let fixture: ComponentFixture<StudentAverageAbsentBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAverageAbsentBignumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAverageAbsentBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
