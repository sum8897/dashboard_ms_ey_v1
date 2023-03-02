import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time-series-filter-panel',
  templateUrl: './time-series-filter-panel.component.html',
  styleUrls: ['./time-series-filter-panel.component.scss']
})
export class TimeSeriesFilterPanelComponent implements OnInit {

  @Output() timeSeriesUpdated = new EventEmitter<any>();
  @Input() minDate: any;
  @Input() maxDate: any;
  selected: any;  

  constructor() {
    const currentDate = moment();
    console.log('the cureent date ', currentDate);
    const last7DaysStart = moment().subtract(7, 'days');
    console.log('last the current date ',last7DaysStart);

    this.selected = {startDate: last7DaysStart, endDate: currentDate};

   }


  ngOnInit(): void {
  }

  changeDate(event: any) {
    // this.timeSeriesUpdated.emit(this.selected)
  }
}
