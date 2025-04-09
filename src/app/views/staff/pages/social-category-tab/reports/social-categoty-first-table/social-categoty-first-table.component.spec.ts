import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCategotyFirstTableComponent } from './social-categoty-first-table.component';

describe('SocialCategotyFirstTableComponent', () => {
  let component: SocialCategotyFirstTableComponent;
  let fixture: ComponentFixture<SocialCategotyFirstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCategotyFirstTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCategotyFirstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
