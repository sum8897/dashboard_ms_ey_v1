import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectigTabComponent } from './inspectig-tab.component';

describe('InspectigTabComponent', () => {
  let component: InspectigTabComponent;
  let fixture: ComponentFixture<InspectigTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectigTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectigTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
