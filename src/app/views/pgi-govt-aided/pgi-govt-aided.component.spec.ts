import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgiGovtAidedComponent } from './pgi-govt-aided.component';

describe('PgiGovtAidedComponent', () => {
  let component: PgiGovtAidedComponent;
  let fixture: ComponentFixture<PgiGovtAidedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgiGovtAidedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgiGovtAidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
