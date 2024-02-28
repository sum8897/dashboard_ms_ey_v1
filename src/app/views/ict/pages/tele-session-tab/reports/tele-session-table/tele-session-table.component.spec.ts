import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleSessionTableComponent } from './tele-session-table.component';

describe('TeleSessionTableComponent', () => {
  let component: TeleSessionTableComponent;
  let fixture: ComponentFixture<TeleSessionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleSessionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleSessionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
