import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByGenderAndSocialCategoryComponent } from './teacher-by-gender-and-social-category.component';

describe('TeacherByGenderAndSocialCategoryComponent', () => {
  let component: TeacherByGenderAndSocialCategoryComponent;
  let fixture: ComponentFixture<TeacherByGenderAndSocialCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherByGenderAndSocialCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherByGenderAndSocialCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
