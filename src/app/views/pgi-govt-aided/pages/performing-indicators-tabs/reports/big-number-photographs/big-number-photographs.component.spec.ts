import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberPhotographsComponent } from './big-number-photographs.component';

describe('BigNumberPhotographsComponent', () => {
  let component: BigNumberPhotographsComponent;
  let fixture: ComponentFixture<BigNumberPhotographsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberPhotographsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberPhotographsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
