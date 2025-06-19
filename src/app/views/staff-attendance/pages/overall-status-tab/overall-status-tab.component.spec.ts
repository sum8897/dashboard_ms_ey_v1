import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusTabComponent } from './overall-status-tab.component';

describe('OverallStatusTabComponent', () => {
  let component: OverallStatusTabComponent;
  let fixture: ComponentFixture<OverallStatusTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
