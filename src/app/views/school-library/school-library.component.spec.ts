import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLibraryComponent } from './school-library.component';

describe('SchoolLibraryComponent', () => {
  let component: SchoolLibraryComponent;
  let fixture: ComponentFixture<SchoolLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
