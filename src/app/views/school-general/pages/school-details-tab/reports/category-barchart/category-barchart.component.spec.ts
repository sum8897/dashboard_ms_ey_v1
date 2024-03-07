import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBarchartComponent } from './category-barchart.component';

describe('CategoryBarchartComponent', () => {
  let component: CategoryBarchartComponent;
  let fixture: ComponentFixture<CategoryBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
