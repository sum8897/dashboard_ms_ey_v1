import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentAbsentBarchartComponent } from "./student-absent-barchart.component";

describe("StudentAbsentBarchartComponent", () => {
  let component: StudentAbsentBarchartComponent;
  let fixture: ComponentFixture<StudentAbsentBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAbsentBarchartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAbsentBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
