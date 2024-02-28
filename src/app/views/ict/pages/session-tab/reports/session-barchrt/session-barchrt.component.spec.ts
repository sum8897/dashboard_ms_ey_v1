import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionBarchrtComponent } from './session-barchrt.component';

describe('SessionBarchrtComponent', () => {
  let component: SessionBarchrtComponent;
  let fixture: ComponentFixture<SessionBarchrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionBarchrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionBarchrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
