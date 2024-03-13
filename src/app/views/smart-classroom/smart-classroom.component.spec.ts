import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClassroomComponent } from './smart-classroom.component';

describe('SmartClassroomComponent', () => {
  let component: SmartClassroomComponent;
  let fixture: ComponentFixture<SmartClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartClassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
