import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTabComponent } from './session-tab.component';

describe('SessionTabComponent', () => {
  let component: SessionTabComponent;
  let fixture: ComponentFixture<SessionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
