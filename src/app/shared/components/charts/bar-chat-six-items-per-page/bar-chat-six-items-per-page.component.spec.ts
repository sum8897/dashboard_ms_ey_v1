import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChatSixItemsPerPageComponent } from './bar-chat-six-items-per-page.component';

describe('BarChatSixItemsPerPageComponent', () => {
  let component: BarChatSixItemsPerPageComponent;
  let fixture: ComponentFixture<BarChatSixItemsPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChatSixItemsPerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChatSixItemsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
