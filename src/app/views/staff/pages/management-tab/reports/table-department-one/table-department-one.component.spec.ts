import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDepartmentOneComponent } from './table-department-one.component';

describe('TableDepartmentOneComponent', () => {
  let component: TableDepartmentOneComponent;
  let fixture: ComponentFixture<TableDepartmentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDepartmentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDepartmentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
