import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeCardComponent } from './comparative-card.component';

describe('ComparativeCardComponent', () => {
  let component: ComparativeCardComponent;
  let fixture: ComponentFixture<ComparativeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparativeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
