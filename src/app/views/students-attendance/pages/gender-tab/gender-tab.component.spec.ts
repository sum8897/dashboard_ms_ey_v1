import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderTabComponent } from './gender-tab.component';

describe('GenderTabComponent', () => {
  let component: GenderTabComponent;
  let fixture: ComponentFixture<GenderTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
