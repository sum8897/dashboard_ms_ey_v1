import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentAverageAbsentTableComponent } from "./student-average-absent-table.component";

describe("StudentAverageAbsentTableComponent", () => {
  let component: StudentAverageAbsentTableComponent;
  let fixture: ComponentFixture<StudentAverageAbsentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAverageAbsentTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAverageAbsentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
