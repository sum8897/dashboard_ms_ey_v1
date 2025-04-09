import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDepartmentTwoComponent } from './table-department-two.component';

describe('TableDepartmentTwoComponent', () => {
  let component: TableDepartmentTwoComponent;
  let fixture: ComponentFixture<TableDepartmentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDepartmentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDepartmentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
