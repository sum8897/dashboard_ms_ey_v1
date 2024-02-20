import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentAverageAbsentSchoolTableComponent } from "./student-average-absent-school-table.component";

describe("StudentAverageAbsentSchoolTableComponent", () => {
  let component: StudentAverageAbsentSchoolTableComponent;
  let fixture: ComponentFixture<StudentAverageAbsentSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAverageAbsentSchoolTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAverageAbsentSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
