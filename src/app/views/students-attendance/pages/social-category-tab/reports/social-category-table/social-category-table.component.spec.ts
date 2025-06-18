import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialCategoryTableComponent } from './social-category-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

// Mock services
import { CommonService } from 'src/app/core/services/common/common.service';
import { DataService } from 'src/app/core/services/data.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { ReportDrilldownService } from 'src/app/core/services/report-drilldown/report-drilldown.service';
import { CriteriaService } from 'src/app/core/services/criteria.service';
import { NgxSpinnerService } from 'ngx-spinner';

describe('SocialCategoryTableComponent', () => {
  let component: SocialCategoryTableComponent;
  let fixture: ComponentFixture<SocialCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialCategoryTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CommonService, useValue: {} },
        { provide: DataService, useValue: {
          getTableReportData: () => Promise.resolve({}),
          getBigNumberReportData: () => Promise.resolve({}),
          getBarChartReportData: () => Promise.resolve({ reportData: {}, config: {} }),
          getMapReportData: () => Promise.resolve({})
        }},
        { provide: RbacService, useValue: { getRbacDetails: () => of({}) } },
        { provide: WrapperService, useValue: {} },
        { provide: ReportDrilldownService, useValue: {
          drilldownData: of(null),
          drilldown: () => Promise.resolve({ reportData: {}, drillDownDetails: {} })
        }},
        { provide: CriteriaService, useValue: {
          criteriaObject: of(null),
          emit: () => {},
          applyCriteria: (criteria, backup, data) => data
        }},
        { provide: NgxSpinnerService, useValue: {
          show: () => {},
          hide: () => {}
        }},
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
