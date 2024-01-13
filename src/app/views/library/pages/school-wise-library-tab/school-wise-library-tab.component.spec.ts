import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolWiseLibraryTabComponent } from './school-wise-library-tab.component';

describe('SchoolWiseLibraryTabComponent', () => {
  let component: SchoolWiseLibraryTabComponent;
  let fixture: ComponentFixture<SchoolWiseLibraryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolWiseLibraryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolWiseLibraryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
