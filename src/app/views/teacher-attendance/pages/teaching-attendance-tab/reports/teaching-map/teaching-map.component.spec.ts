import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMapComponent } from './teaching-map.component';

describe('TeachingMapComponent', () => {
  let component: TeachingMapComponent;
  let fixture: ComponentFixture<TeachingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
