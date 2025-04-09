import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTabComponent } from './management-tab.component';

describe('ManagementTabComponent', () => {
  let component: ManagementTabComponent;
  let fixture: ComponentFixture<ManagementTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
