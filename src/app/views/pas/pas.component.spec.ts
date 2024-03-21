import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasComponent } from './pas.component';

describe('PasComponent', () => {
  let component: PasComponent;
  let fixture: ComponentFixture<PasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
