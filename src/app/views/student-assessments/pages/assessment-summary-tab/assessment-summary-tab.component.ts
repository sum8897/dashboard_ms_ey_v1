import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { config } from '../../config/student_assessments';
import { AvgStuAsseesScoreBignoComponent } from './reports/avg-stu-assees-score-bigno/avg-stu-assees-score-bigno.component';
import { AvgStuAsseesScoreTableComponent } from './reports/avg-stu-assees-score-table/avg-stu-assees-score-table.component';
import { GradeWiseAvgStuAsessScoreComponent } from './reports/grade-wise-avg-stu-asess-score/grade-wise-avg-stu-asess-score.component';
import { SubjectWiseAvgStuAsessScoreComponent } from './reports/subject-wise-avg-stu-asess-score/subject-wise-avg-stu-asess-score.component';
@Component({
  selector: 'app-assessment-summary-tab',
  templateUrl: './assessment-summary-tab.component.html',
  styleUrls: ['./assessment-summary-tab.component.scss']
})
export class AssessmentSummaryTabComponent implements OnInit {

  
  bigNumberReports: any = {};
  minYear: any;
  maxYear: any;
  minMonth: any;
  maxMonth: any;
  academicYear: any = [];
  months: any = [];
  filters: any;
  reportsToBeShown: any = [];
  rbacDetails: any;
  reportsData: any = [];
  startDate: any;
  endDate: any;
  defaultSelectedDays: any;
  hasTimeSeriesFilters: boolean = false;
  hasCommonFilters: boolean = true;
  bigNumberMetrics: any = [];
  tabLabel:any = 'Assessment Summary'
  
@ViewChild('AvgStuAsseesScoreBignoComponent') AvgStuAsseesScoreBignoComponent: AvgStuAsseesScoreBignoComponent;
@ViewChild('AvgStuAsseesScoreTableComponent') AvgStuAsseesScoreTableComponent: AvgStuAsseesScoreTableComponent;
@ViewChild('GradeWiseAvgStuAsessScoreComponent') GradeWiseAvgStuAsessScoreComponent: GradeWiseAvgStuAsessScoreComponent;
@ViewChild('SubjectWiseAvgStuAsessScoreComponent') SubjectWiseAvgStuAsessScoreComponent: SubjectWiseAvgStuAsessScoreComponent;

      
constructor(private _wrapperService: WrapperService, private _rbacService: RbacService) {
  this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
  })
  }

  async ngOnInit(): Promise<void> {
  // this.renderReports();
  }

  async ngAfterViewInit(): Promise<void> {
  if (this.hasCommonFilters) {
      this.filters = await this._wrapperService.constructCommonFilters(config.filters, this.tabLabel);
      this.AvgStuAsseesScoreTableComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.GradeWiseAvgStuAsessScoreComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.SubjectWiseAvgStuAsessScoreComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.AvgStuAsseesScoreBignoComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });

    }
  if (this.startDate === undefined && this.endDate === undefined && this.hasTimeSeriesFilters) {
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days);
      this.AvgStuAsseesScoreTableComponent?.getReportData({ timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
      this.GradeWiseAvgStuAsessScoreComponent?.getReportData({ timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
      this.SubjectWiseAvgStuAsessScoreComponent?.getReportData({ timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
      this.AvgStuAsseesScoreBignoComponent?.getReportData({ timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });

    }
  }

  checkReport(key: string, reportType: string): Boolean {
  let reportConfig = config;
  let flag = false;
  reportConfig[key]?.filters?.forEach((filter: any) => {
      if (Number(filter.hierarchyLevel) === Number(this.rbacDetails?.role) && Object.keys(filter?.actions?.queries).includes(reportType)) {
      flag = true
      }
  })
  return flag
  }

  csvDownload(csvData: any) {
  if (csvData) {
      this.reportsData.push(csvData)
  }
  }

  filtersUpdated(filters: any) {
  this.reportsData = [];
  this.AvgStuAsseesScoreTableComponent?.getReportData({ filterValues: filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
  this.GradeWiseAvgStuAsessScoreComponent?.getReportData({ filterValues: filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
  this.SubjectWiseAvgStuAsessScoreComponent?.getReportData({ filterValues: filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
  this.AvgStuAsseesScoreBignoComponent?.getReportData({ filterValues: filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });

}

  timeSeriesUpdated(event: any): void {
  this.startDate = event?.startDate?.toDate().toISOString().split('T')[0]
  this.endDate = event?.endDate?.toDate().toISOString().split('T')[0]
  if (event?.startDate !== null && event?.endDate !== null) {
      this.reportsData = [];
      this.AvgStuAsseesScoreTableComponent?.getReportData({timeSeriesValues: {startDate: this.startDate, endDate: this.endDate}});
      this.GradeWiseAvgStuAsessScoreComponent?.getReportData({timeSeriesValues: {startDate: this.startDate, endDate: this.endDate}});
      this.SubjectWiseAvgStuAsessScoreComponent?.getReportData({timeSeriesValues: {startDate: this.startDate, endDate: this.endDate}});
      this.AvgStuAsseesScoreBignoComponent?.getReportData({timeSeriesValues: {startDate: this.startDate, endDate: this.endDate}});

    }
  }

  importBigNumberMetrics(bigNumberMetric: any) {
      this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
  }

}
