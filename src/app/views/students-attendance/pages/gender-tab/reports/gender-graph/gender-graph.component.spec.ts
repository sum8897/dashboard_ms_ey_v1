import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderGraphComponent } from './gender-graph.component';

describe('GenderGraphComponent', () => {
  let component: GenderGraphComponent;
  let fixture: ComponentFixture<GenderGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
