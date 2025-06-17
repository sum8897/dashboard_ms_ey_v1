import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCategoryTabComponent } from './social-category-tab.component';

describe('SocialCategoryTabComponent', () => {
  let component: SocialCategoryTabComponent;
  let fixture: ComponentFixture<SocialCategoryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCategoryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCategoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
