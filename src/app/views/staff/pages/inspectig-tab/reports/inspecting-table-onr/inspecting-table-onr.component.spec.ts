import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectingTableOnrComponent } from './inspecting-table-onr.component';

describe('InspectingTableOnrComponent', () => {
  let component: InspectingTableOnrComponent;
  let fixture: ComponentFixture<InspectingTableOnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectingTableOnrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectingTableOnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
