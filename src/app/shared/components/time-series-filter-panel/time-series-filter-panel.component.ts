import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-time-series-filter-panel',
  templateUrl: './time-series-filter-panel.component.html',
  styleUrls: ['./time-series-filter-panel.component.scss']
})
export class TimeSeriesFilterPanelComponent implements OnInit {

  @Output() timeSeriesUpdated = new EventEmitter<any>();
  @Input() minDate: any;
  @Input() maxDate: any;
  @Input() defaultSelectedDays: any = 7;
  range: FormGroup;
  reset: boolean = false;
  prevStartDate: any;
  prevEndDate: any;

  constructor(private formBuilder: FormBuilder) {
    let startDate, endDate;
    this.range = this.formBuilder.group({
      start: [startDate],
      end: [endDate]
    });
    if (this.defaultSelectedDays) {
      endDate = new Date();
      const days = endDate.getDate() - this.defaultSelectedDays;
      startDate = new Date();
      startDate.setDate(days);
      this.range.setValue({ 'start': startDate, 'end': endDate });
      this.emitTimeSeriesUpdated(startDate, endDate);
    }
    combineLatest([
      this.range.controls['start'].valueChanges,
      this.range.controls['end'].valueChanges
    ]).subscribe(([startDate, endDate]) => {
      if (startDate && endDate) {
        setTimeout(() => {
          // this.changeDate(startDate, endDate);
          this.emitTimeSeriesUpdated(startDate, endDate);
        }, 100);
      }
    });

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   if (this.defaultSelectedDays) {
    //     const endDate = new Date();
    //     const days = endDate.getDate() - this.defaultSelectedDays;
    //     const startDate = new Date();
    //     startDate.setDate(days);
    //     this.range.setValue({ 'start': startDate, 'end': endDate });
    //     this.emitTimeSeriesUpdated(startDate, endDate);
    //   }
    // }, 100);
  }

  // changeDate(startDate, endDate): void {
  //   // const startDate = this.range.controls['start'].value;
  //   // const endDate = this.range.controls['end'].value;
  //   this.emitTimeSeriesUpdated(startDate, endDate);
  // }

  private emitTimeSeriesUpdated(startDate: any, endDate: any): void {
    if(startDate !== this.prevStartDate || endDate !== this.prevEndDate) {
      this.prevStartDate = startDate
      this.prevEndDate = endDate
      const payload = { startDate: startDate, endDate: endDate };
      console.log(startDate, endDate)
      this.timeSeriesUpdated.emit(payload);
    }
  }
  clearDateRange() {
    // this.range.reset();
    if (this.defaultSelectedDays) {
      const endDate = new Date();
      const days = endDate.getDate() - this.defaultSelectedDays;
      const startDate = new Date();
      startDate.setDate(days);
      this.range.setValue({ 'start': startDate, 'end': endDate });
    }
  }

}
