import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleEducationTableComponent } from './tele-education-table.component';

describe('TeleEducationTableComponent', () => {
  let component: TeleEducationTableComponent;
  let fixture: ComponentFixture<TeleEducationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleEducationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleEducationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
