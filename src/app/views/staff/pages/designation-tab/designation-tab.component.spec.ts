import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationTabComponent } from './designation-tab.component';

describe('DesignationTabComponent', () => {
  let component: DesignationTabComponent;
  let fixture: ComponentFixture<DesignationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
