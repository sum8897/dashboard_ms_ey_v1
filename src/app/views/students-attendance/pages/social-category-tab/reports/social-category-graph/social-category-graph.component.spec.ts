import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCategoryGraphComponent } from './social-category-graph.component';

describe('SocialCategoryGraphComponent', () => {
  let component: SocialCategoryGraphComponent;
  let fixture: ComponentFixture<SocialCategoryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCategoryGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCategoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
