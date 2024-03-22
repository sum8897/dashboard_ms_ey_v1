import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationTabComponent } from './participation-tab.component';

describe('ParticipationTabComponent', () => {
  let component: ParticipationTabComponent;
  let fixture: ComponentFixture<ParticipationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
