import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIndicatorsTabComponent } from './key-indicators-tab.component';

describe('KeyIndicatorsTabComponent', () => {
  let component: KeyIndicatorsTabComponent;
  let fixture: ComponentFixture<KeyIndicatorsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyIndicatorsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyIndicatorsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
