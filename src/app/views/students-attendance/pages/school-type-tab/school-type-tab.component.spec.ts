import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTypeTabComponent } from './school-type-tab.component';

describe('SchoolTypeTabComponent', () => {
  let component: SchoolTypeTabComponent;
  let fixture: ComponentFixture<SchoolTypeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTypeTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTypeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
