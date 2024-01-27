import { Component, Input, OnChanges, OnInit, ViewChild, SimpleChanges, HostListener } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import * as HighchartsMore from "highcharts/highcharts-more";


const HighchartsMore2: any = HighchartsMore;
HighchartsMore2(Highcharts);

@Component({
  selector: 'app-new-bar-chart',
  templateUrl: './new-bar-chart.component.html',
  styleUrls: ['./new-bar-chart.component.scss'],
})
export class NewBarChartComponent {
  chart!: Highcharts.Chart;
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  data = [1, 2, 3, 4];

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };

}
