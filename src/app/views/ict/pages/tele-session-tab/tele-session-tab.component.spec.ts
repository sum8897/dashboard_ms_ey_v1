import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleSessionTabComponent } from './tele-session-tab.component';

describe('TeleSessionTabComponent', () => {
  let component: TeleSessionTabComponent;
  let fixture: ComponentFixture<TeleSessionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleSessionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleSessionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
