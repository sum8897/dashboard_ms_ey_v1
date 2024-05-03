import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';

@Component({
  selector: 'app-big-number-ict',
  templateUrl: './big-number-ict.component.html',
  styleUrls: ['./big-number-ict.component.scss']
})
export class BigNumberIctComponent implements OnInit {

  c
  @Input() bigNumberReportData: any;
  averagePercentage: any;
  differenceInPercentage: any;
  differenceIndicator: any= undefined;
  valueSuffix: any;
  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges(): void {
    this.updateValues();
  }

  updateValues(): void {
    this.averagePercentage = this.bigNumberReportData?.averagePercentage;
    this.valueSuffix = this.bigNumberReportData?.valueSuffix ? this.bigNumberReportData?.valueSuffix : '';
    if(this.bigNumberReportData && this.bigNumberReportData.differencePercentage && this.bigNumberReportData.averagePercentage) {
      this.differenceInPercentage = (this.bigNumberReportData.averagePercentage - this.bigNumberReportData.differencePercentage).toFixed(2);
    }
    if(this.differenceInPercentage > 0){
      this.differenceIndicator = true;
    }
    else if(this.differenceInPercentage < 0) {
      this.differenceIndicator = false;
      this.differenceInPercentage = Math.abs(this.differenceInPercentage)
    }
    else {
      this.differenceIndicator = undefined;
    }
  }

  formatNumber(input: any) {
    return formatNumberForReport(Number(input))
  }

}
