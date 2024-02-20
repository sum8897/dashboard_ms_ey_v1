import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentAbsentTrendlineComponent } from "./student-absent-trendline.component";

describe("StudentAbsentTrendlineComponent", () => {
  let component: StudentAbsentTrendlineComponent;
  let fixture: ComponentFixture<StudentAbsentTrendlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAbsentTrendlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAbsentTrendlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
