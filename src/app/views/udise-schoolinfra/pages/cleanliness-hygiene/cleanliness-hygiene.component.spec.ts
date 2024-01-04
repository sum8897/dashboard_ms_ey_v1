import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanlinessHygieneComponent } from './cleanliness-hygiene.component';

describe('CleanlinessHygieneComponent', () => {
  let component: CleanlinessHygieneComponent;
  let fixture: ComponentFixture<CleanlinessHygieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanlinessHygieneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanlinessHygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
