import { Component, OnInit, ViewChild } from '@angular/core';
import { TacAverageAttendanceRankComponent } from './reports/tac-average-attendance-rank/tac-average-attendance-rank.component';
import { TasAverageAttendanceComponent } from './reports/tas-average-attendance/tas-average-attendance.component';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { TasAverageAttendanceBignumberComponent } from './reports/tas-average-attendance-bignumber/tas-average-attendance-bignumber.component';
import { config } from '../../config/teacher_attendance_config'
import { TeacherAttendanceMapComponent } from './reports/teacher-attendance-map/teacher-attendance-map.component';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-teacher-attendance-summary',
  templateUrl: './teacher-attendance-summary.component.html',
  styleUrls: ['./teacher-attendance-summary.component.scss']
})
export class TeacherAttendanceSummaryComponent implements OnInit {

  bigNumberReports: any = {};
  maxDate: any;
  minDate: any;
  startDate: any;
  endDate: any
  reportsData: any[] = []
  rbacDetails: any;
  defaultSelectedDays: any = 7;
 
  //added for full school report download
  // title = "Download School Report"
  schoolReportsData: any[] = [];
  pagereportName = "teachers_present"
  //
  @ViewChild('averageAttendanceBigNumber') averageAttendanceBigNumber: TasAverageAttendanceBignumberComponent;
  @ViewChild('averageAttendance') averageAttendance: TasAverageAttendanceComponent;
  @ViewChild('averageAttendanceRank') averageAttendanceRank: TacAverageAttendanceRankComponent
  @ViewChild('tasMap') tasMap: TeacherAttendanceMapComponent
  constructor(private readonly _commonService: CommonService, private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.startDate === undefined && this.endDate === undefined) {
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days)
      this.averageAttendanceBigNumber?.getReportData(startDate?.toISOString().split('T')[0], endDate?.toISOString().split('T')[0]);
      this.averageAttendance?.getReportData(startDate?.toISOString().split('T')[0], endDate?.toISOString().split('T')[0]);
      this.averageAttendanceRank?.getReportData(startDate?.toISOString().split('T')[0], endDate?.toISOString().split('T')[0]);
      this.tasMap?.getReportData({ timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
      this.getSchoolReportData()
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

  getSchoolReportData() {
    let query = `select    school_id,    school_name,    round((sum(criteria_met) * 100) / count(school_id)) as percent_school_met_criteria  FROM    (      select        water.academicyear_id as academicyear_id,        water.school_id as school_id,        water.sum as has_water,        toilet.sum as has_toilet,        library.sum as has_library,        handwash.sum as has_handwash,        solar_panel.sum as has_solarpanel,        playground.sum as has_playground,        case when (          water.sum :: int + toilet.sum :: int + library.sum :: int + handwash.sum :: int + solar_panel.sum :: int + playground.sum :: int        ) = 6 then 1 else 0 end as criteria_met,        school.school_name,        district_name,        district_id,        block_name,        cluster_name      from        datasets.school_infra_drinkingwater_b2jvnmboswx_bmldvwj7 as water        inner join datasets.school_infra_toilet_fmpgclnmwwbzcr5rphco as toilet on toilet.school_id = water.school_id        and toilet.academicyear_id = water.academicyear_id        inner join datasets.school_infra_library_chvsch9qvw9nex0nbw0k as library on library.school_id = water.school_id        and library.academicyear_id = water.academicyear_id        inner join datasets.school_infra_handwash_fmz7a3fty2nob28om1ga as handwash on handwash.school_id = water.school_id        and handwash.academicyear_id = water.academicyear_id        inner join datasets.school_infra_solarpanel_l2n5fmpnv2xsbhroqhwd as solar_panel on solar_panel.school_id = water.school_id        and solar_panel.academicyear_id = water.academicyear_id        inner join datasets.school_infra_playground_intsfgr8xgrsbhroqh8a as playground on playground.school_id = water.school_id        and playground.academicyear_id = water.academicyear_id        inner join dimensions.school on school.school_id = water.school_id    ) as intermediate_table where academicyear_id = '2021-2022'  group by    school_name,    school_id limit 10`;
    this._commonService.getReportDataNew(query).subscribe((res: any) => {
      let d = { reportData: res, reportType: 'map', reportName: "teacher_present_school_wise" };
      this.schoolReportsData.push(d);
    })
  }

  settimeSeriesDates(dates: any) {
    // this.minDate = (this.minDate === undefined || (dates?.minDate && this.minDate < dates.minDate)) ? dates?.minDate : this.minDate
    // this.maxDate = (this.maxDate === undefined || (dates?.maxDate && this.maxDate > dates.maxDate)) ? dates.maxDate : this.maxDate
  }

  timeSeriesUpdated(event: any): void {
    this.startDate = event?.startDate?.toDate().toISOString().split('T')[0]
    this.endDate = event?.endDate?.toDate().toISOString().split('T')[0]
    if (event?.startDate !== null && event?.endDate !== null) {
      this.reportsData = []
      this.averageAttendanceBigNumber?.getReportData(this.startDate, this.endDate);
      this.averageAttendance?.getReportData(this.startDate, this.endDate);
      this.averageAttendanceRank?.getReportData(this.startDate, this.endDate);
      this.tasMap?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
    }
  }

}


