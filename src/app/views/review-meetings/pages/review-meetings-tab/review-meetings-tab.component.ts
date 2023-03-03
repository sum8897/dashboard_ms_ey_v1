import { Component, OnInit, ViewChild } from '@angular/core';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { config } from '../../config/review_meetings_config';
import { ReviewMeetingsConductedComponent } from './reports/review-meetings-conducted/review-meetings-conducted.component';
import { ReviewMeetingsStatusComponent } from './reports/review-meetings-status/review-meetings-status.component';

@Component({
  selector: 'app-review-meetings-tab',
  templateUrl: './review-meetings-tab.component.html',
  styleUrls: ['./review-meetings-tab.component.scss']
})
export class ReviewMeetingsTabComponent implements OnInit {

  bigNumberReports: any = {};
  minYear: any;
  maxYear: any;
  minMonth: any;
  maxMonth: any;
  academicYear: any = [];
  months: any = [];
  filters: any;


  @ViewChild('reviewMeetingsConducted') reviewMeetingsConducted: ReviewMeetingsConductedComponent;
  @ViewChild('reviewMeetingsStatus') reviewMeetingsStatus: ReviewMeetingsStatusComponent;
  constructor(private _wrapperService: WrapperService) { }

  async ngOnInit(): Promise<void> {
    this.filters = await this._wrapperService.constructCommonFilters(config.filters)
    this.reviewMeetingsConducted.getReportData(this.filters.map((filter) => { return {columnName: filter.valueProp, value: filter.value}}));
    this.reviewMeetingsStatus.getReportData(this.filters.map((filter) => { return {columnName: filter.valueProp, value: filter.value}}));
  }

  appendBigNumber({data,reportName}) {
    this.bigNumberReports = { 
      ...this.bigNumberReports,
      [reportName]:data
    }
  }
  getObjectlen(object:Object){
    return Object.keys(object).length
  }

  filtersUpdated(filters: any) {
    this.reviewMeetingsConducted.getReportData(filters.map((filter) => { return {columnName: filter.valueProp, value: filter.value}}));
    this.reviewMeetingsStatus.getReportData(filters.map((filter) => { return {columnName: filter.valueProp, value: filter.value}}));
  }

}
