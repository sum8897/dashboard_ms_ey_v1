import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTeachingMapComponent } from './non-teaching-map.component';

describe('NonTeachingMapComponent', () => {
  let component: NonTeachingMapComponent;
  let fixture: ComponentFixture<NonTeachingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTeachingMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTeachingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
