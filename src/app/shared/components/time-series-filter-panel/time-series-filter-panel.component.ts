import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-time-series-filter-panel',
  templateUrl: './time-series-filter-panel.component.html',
  styleUrls: ['./time-series-filter-panel.component.scss']
})
export class TimeSeriesFilterPanelComponent implements OnInit {

  @Output() timeSeriesUpdated = new EventEmitter<any>();
  @Input() minDate: any;
  @Input() maxDate: any;
  @Input() defaultSelectedDays: any;
  selected: any;

  constructor() {

  }



  ngOnInit(): void {
    setTimeout(() => {
      if (this.defaultSelectedDays) {
        let endDate = new Date();
        let days = endDate.getDate() - this.defaultSelectedDays;
        let startDate = new Date();
        startDate.setDate(days)
        this.selected = { startDate: startDate, endDate: endDate };
      }
    }, 100);
  }

  changeDate(event: any) {
    this.timeSeriesUpdated.emit(this.selected)
  }

}
