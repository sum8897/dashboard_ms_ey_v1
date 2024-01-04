import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletUrinalComponent } from './toilet-urinal.component';

describe('ToiletUrinalComponent', () => {
  let component: ToiletUrinalComponent;
  let fixture: ComponentFixture<ToiletUrinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToiletUrinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToiletUrinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
