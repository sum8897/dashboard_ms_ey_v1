import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { config } from '../../config/student_assessments';
import { AvgStuAsseesScoreBignoComponent } from './reports/avg-stu-assees-score-bigno/avg-stu-assees-score-bigno.component';
import { AvgStuAsseesScoreTableComponent } from './reports/avg-stu-assees-score-table/avg-stu-assees-score-table.component';
import { GradeWiseAvgStuAsessScoreComponent } from './reports/grade-wise-avg-stu-asess-score/grade-wise-avg-stu-asess-score.component';
import { SubjectWiseAvgStuAsessScoreComponent } from './reports/subject-wise-avg-stu-asess-score/subject-wise-avg-stu-asess-score.component';
import { CommonService } from 'src/app/core/services/common/common.service';

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
  tabLabel: any = 'Assessment Summary'

  //added for full school report download
  // title = "Download School Report"
  schoolReportsData: any[] = [];
  pagereportName = "student_assessment"

  @ViewChild('AvgStuAsseesScoreBignoComponent') AvgStuAsseesScoreBignoComponent: AvgStuAsseesScoreBignoComponent;
  @ViewChild('AvgStuAsseesScoreTableComponent') AvgStuAsseesScoreTableComponent: AvgStuAsseesScoreTableComponent;
  @ViewChild('GradeWiseAvgStuAsessScoreComponent') GradeWiseAvgStuAsessScoreComponent: GradeWiseAvgStuAsessScoreComponent;
  @ViewChild('SubjectWiseAvgStuAsessScoreComponent') SubjectWiseAvgStuAsessScoreComponent: SubjectWiseAvgStuAsessScoreComponent;


  constructor(private readonly _commonService: CommonService,private _wrapperService: WrapperService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  async ngOnInit(): Promise<void> {
    // this.renderReports();
  }

  async ngAfterViewInit(): Promise<void> {
    console.log(this.hasCommonFilters);
    
    if (this.hasCommonFilters) {
      this.filters = await this._wrapperService.constructCommonFilters(config.filters, this.tabLabel);
      this.AvgStuAsseesScoreTableComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.GradeWiseAvgStuAsessScoreComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.SubjectWiseAvgStuAsessScoreComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.AvgStuAsseesScoreBignoComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.getSchoolReportData()
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

  getSchoolReportData(startDate?: string, endDate?: string) {
    let query;
    // if (startDate && endDate) {
    //   this.startDate = startDate;
    //   this.endDate = endDate;
    // }
    // else {
    //   let endDate = new Date();
    //   let days = endDate.getDate() - this.defaultSelectedDays;
    //   let startDate = new Date();
    //   startDate.setDate(days)
    //   this.startDate = startDate?.toISOString().split('T')[0];
    //   this.endDate = endDate?.toISOString().split('T')[0];
    // }
    console.log("Date is:", this.startDate, this.endDate);
    if (this.rbacDetails?.role == 1) {
      query = `SELECT  ACADEMICYEAR_ID, SCHOOL_ID, SCHOOL_NAME, EXAM_ID, GRADE, SUBJECT, LO_NAME, ROUND(CAST(AVG(OBTAINED_MARKS / TOTAL_MARKS) * 100 AS numeric), 2) AS SCORES FROM (SELECT OBTAINED_MARKS.SUM AS OBTAINED_MARKS, TOTAL_MARKS.SUM AS TOTAL_MARKS, OBTAINED_MARKS.GRADE_ID, OBTAINED_MARKS.ACADEMICYEAR_ID, OBTAINED_MARKS.SUBJECT_ID, OBTAINED_MARKS.LO_ID, GRADE.GRADE, SUBJECT.SUBJECT, OBTAINED_MARKS.EXAM_ID, LO.LO_NAME, SCHOOL.SCHOOL_ID, SCHOOL.SCHOOL_NAME, SCHOOL.CLUSTER_NAME, SCHOOL.BLOCK_NAME, SCHOOL.DISTRICT_NAME FROM DATASETS.ASSESSMENT_OBTAINEDMARKS_BWBODTT2FNDSW2K7DSKK AS OBTAINED_MARKS INNER JOIN DATASETS.ASSESSMENT_TOTALMARKS_ETT2DMFXQLM6YWIFCGK5 AS TOTAL_MARKS ON TOTAL_MARKS.SCHOOL_ID = OBTAINED_MARKS.SCHOOL_ID INNER JOIN DIMENSIONS.SCHOOL AS SCHOOL ON SCHOOL.SCHOOL_ID = OBTAINED_MARKS.SCHOOL_ID INNER JOIN DIMENSIONS.GRADE AS GRADE ON GRADE.GRADE_ID = OBTAINED_MARKS.GRADE_ID INNER JOIN DIMENSIONS.SUBJECT AS SUBJECT ON SUBJECT.SUBJECT_ID = OBTAINED_MARKS.SUBJECT_ID INNER JOIN DIMENSIONS.EXAM AS EXAM ON EXAM.EXAM_ID = OBTAINED_MARKS.EXAM_ID INNER JOIN DIMENSIONS.LO AS LO ON LO.LO_ID = OBTAINED_MARKS.LO_ID) AS STUDENT_ASSESSMENT GROUP BY  ACADEMICYEAR_ID, SCHOOL_ID, SCHOOL_NAME, EXAM_ID, GRADE, SUBJECT, LO_NAME`
    } 
    // else if (this.rbacDetails?.role == 2) {
    //   query = `select  school.school_id,  school.school_name,        district_name,        block_name,        cluster_name ,       sum(total_teachers.sum) as total_teachers,  sum(teachers_marked_present.sum) as teachers_marked_present,   ceil(round(cast((sum(teachers_marked_present.sum)/sum(total_teachers.sum) )*100 as numeric),2)) as average_percent_attendance from datasets.sch_att_teachers_marked_present_daily_school as teachers_marked_present  inner join  datasets.sch_att_total_teachers_daily_school as total_teachers on teachers_marked_present.school_id = total_teachers.school_id inner join dimensions.school on school.school_id = total_teachers.school_id where total_teachers.date between '${this.startDate}' and '${this.endDate}' and district_id = '${this.rbacDetails?.district}' group by  school.school_id,   school_name,    district_name,    block_name,    cluster_name;  `;
    // } else if (this.rbacDetails?.role == 3) {
    //   query = `select  school.school_id,  school.school_name,        district_name,        block_name,        cluster_name ,       sum(total_teachers.sum) as total_teachers,  sum(teachers_marked_present.sum) as teachers_marked_present,   ceil(round(cast((sum(teachers_marked_present.sum)/sum(total_teachers.sum) )*100 as numeric),2)) as average_percent_attendance from datasets.sch_att_teachers_marked_present_daily_school as teachers_marked_present  inner join  datasets.sch_att_total_teachers_daily_school as total_teachers on teachers_marked_present.school_id = total_teachers.school_id inner join dimensions.school on school.school_id = total_teachers.school_id where total_teachers.date between '${this.startDate}' and '${this.endDate}' and district_id = '${this.rbacDetails?.district}' and block_id = '${this.rbacDetails?.block}' group by  school.school_id,   school_name,    district_name,    block_name,    cluster_name;  `;
    // } else if (this.rbacDetails?.role == 4) {
    //   query = `select  school.school_id,  school.school_name,        district_name,        block_name,        cluster_name ,       sum(total_teachers.sum) as total_teachers,  sum(teachers_marked_present.sum) as teachers_marked_present,   ceil(round(cast((sum(teachers_marked_present.sum)/sum(total_teachers.sum) )*100 as numeric),2)) as average_percent_attendance from datasets.sch_att_teachers_marked_present_daily_school as teachers_marked_present  inner join  datasets.sch_att_total_teachers_daily_school as total_teachers on teachers_marked_present.school_id = total_teachers.school_id inner join dimensions.school on school.school_id = total_teachers.school_id where total_teachers.date between '${this.startDate}' and '${this.endDate}' and district_id = '${this.rbacDetails?.district}' and block_id = '${this.rbacDetails?.block}' and cluster_id = '${this.rbacDetails?.cluster}' group by  school.school_id,   school_name,    district_name,    block_name,    cluster_name;  `;
    // }

    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let d = { reportData: res, reportType: 'map', reportName: "teacher_present_school_wise" };
      if (d.reportData.length > 0) {
        this.schoolReportsData.push(d);
      }
    })
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
      this.AvgStuAsseesScoreTableComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
      this.GradeWiseAvgStuAsessScoreComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
      this.SubjectWiseAvgStuAsessScoreComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
      this.AvgStuAsseesScoreBignoComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });

    }
  }

  importBigNumberMetrics(bigNumberMetric: any) {
    this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
  }

}
