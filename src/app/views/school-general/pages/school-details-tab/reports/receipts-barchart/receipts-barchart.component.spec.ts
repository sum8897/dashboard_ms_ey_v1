import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsBarchartComponent } from './receipts-barchart.component';

describe('ReceiptsBarchartComponent', () => {
  let component: ReceiptsBarchartComponent;
  let fixture: ComponentFixture<ReceiptsBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptsBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptsBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
