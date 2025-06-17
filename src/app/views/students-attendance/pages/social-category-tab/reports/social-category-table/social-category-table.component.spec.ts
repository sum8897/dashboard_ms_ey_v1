import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCategoryTableComponent } from './social-category-table.component';

describe('SocialCategoryTableComponent', () => {
  let component: SocialCategoryTableComponent;
  let fixture: ComponentFixture<SocialCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCategoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
