import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctClassroomTabComponent } from './ict-classroom-tab.component';

describe('IctClassroomTabComponent', () => {
  let component: IctClassroomTabComponent;
  let fixture: ComponentFixture<IctClassroomTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctClassroomTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IctClassroomTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
