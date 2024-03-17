import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTabletComponent } from './smart-tablet.component';

describe('SmartTabletComponent', () => {
  let component: SmartTabletComponent;
  let fixture: ComponentFixture<SmartTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTabletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
