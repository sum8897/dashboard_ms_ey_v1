import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFirstTableComponent } from './class-first-table.component';

describe('ClassFirstTableComponent', () => {
  let component: ClassFirstTableComponent;
  let fixture: ComponentFixture<ClassFirstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassFirstTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassFirstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
