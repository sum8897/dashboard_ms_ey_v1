import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleEducationTabComponent } from './tele-education-tab.component';

describe('TeleEducationTabComponent', () => {
  let component: TeleEducationTabComponent;
  let fixture: ComponentFixture<TeleEducationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleEducationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleEducationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
