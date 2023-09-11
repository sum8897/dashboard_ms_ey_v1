import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { config } from '../../config/telemetry_config';
import { environment } from 'src/environments/environment';
import { TelemetryBigNumberComponent } from './reports/telemetry-big-number/telemetry-big-number.component';
import { BrowserTypeWiseBarChartComponent } from './reports/browser-type-wise-bar-chart/browser-type-wise-bar-chart.component';
import { DeviceTypeWiseBarChartComponent } from './reports/device-type-wise-bar-chart/device-type-wise-bar-chart.component';
import { PopularLandingPagesBarChartComponent } from './reports/popular-landing-pages-bar-chart/popular-landing-pages-bar-chart.component';
import { TimeSpentPerPageBarChartComponent } from './reports/time-spent-per-page-bar-chart/time-spent-per-page-bar-chart.component';
import moment from 'moment';

@Component({
  selector: 'app-telemetry-tab',
  templateUrl: './telemetry-tab.component.html',
  styleUrls: ['./telemetry-tab.component.scss']
})
export class TelemetryTabComponent implements OnInit {

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
  defaultSelectedDays: any = 7;
  hasTimeSeriesFilters: boolean = true;
  hasCommonFilters: boolean = false;
  tabLabel: any = "telemetry";
  NVSK: boolean = true;
  matLabel = 'Telemtery';

  @ViewChild('telemetryBigNumber') telemetryBigNumber: TelemetryBigNumberComponent;
  @ViewChild('browserTypeWiseBarChartComponent') browserTypeWiseBarChartComponent: BrowserTypeWiseBarChartComponent;
  @ViewChild('deviceTypeWiseBarChartComponent') deviceTypeWiseBarChartComponent: DeviceTypeWiseBarChartComponent;
  @ViewChild('popularLandingPagesBarChartComponent') popularLandingPagesBarChartComponent: PopularLandingPagesBarChartComponent;
  @ViewChild('timeSpentPerPageBarChartComponent') timeSpentPerPageBarChartComponent: TimeSpentPerPageBarChartComponent;

  @Input() bigNumberMetrics: any = [];

  constructor(private _wrapperService: WrapperService, private _rbacService: RbacService) {
      this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
          this.rbacDetails = rbacDetails;
      })
      if(environment.config === 'VSK') {
          this.NVSK = false
      }
  }

  async ngOnInit(): Promise<void> {
      // this.renderReports();
  }

  async ngAfterViewInit(): Promise<void> {
      if (this.hasCommonFilters) {
          this.filters = await this._wrapperService.constructCommonFilters(config.filters, this.tabLabel);
          this.telemetryBigNumber?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
          this.browserTypeWiseBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
          this.deviceTypeWiseBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
          this.popularLandingPagesBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
          this.timeSpentPerPageBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });

      }

      if (this.startDate != undefined && this.endDate != undefined && this.hasTimeSeriesFilters) {
        //   let endDate = new Date();
        //   let days = endDate.getDate() - this.defaultSelectedDays;
        //   let startDate = new Date();
        //   startDate.setDate(days);
        let startDate = moment(this.startDate).format('YYYY-MM-DD');
        let endDate = moment(this.endDate).format('YYYY-MM-DD');
          this.browserTypeWiseBarChartComponent?.getReportData({ timeSeriesValues: { startDate: startDate, endDate: endDate } });
          this.deviceTypeWiseBarChartComponent?.getReportData({ timeSeriesValues: { startDate: startDate, endDate: endDate } });
          this.popularLandingPagesBarChartComponent?.getReportData({ timeSeriesValues: { startDate:startDate, endDate:endDate } });
          this.timeSpentPerPageBarChartComponent?.getReportData({ timeSeriesValues: { startDate: startDate, endDate: endDate } });
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
      this.telemetryBigNumber?.getReportData({ filterValues: filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.browserTypeWiseBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.deviceTypeWiseBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.popularLandingPagesBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      this.timeSpentPerPageBarChartComponent?.getReportData({ filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });

  }

  timeSeriesUpdated(event: any): void {
    this.startDate = moment(event.startDate).format('YYYY-MM-DD');
    this.endDate = moment(event.endDate).format('YYYY-MM-DD');
      if (event?.startDate !== null && event?.endDate !== null) {
        console.log(event);
          this.reportsData = [];
        //   this.telemetryBigNumber?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
          this.browserTypeWiseBarChartComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
          this.deviceTypeWiseBarChartComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
          this.popularLandingPagesBarChartComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
          this.timeSpentPerPageBarChartComponent?.getReportData({ timeSeriesValues: { startDate: this.startDate, endDate: this.endDate } });
      }
  }

  importBigNumberMetrics(bigNumberMetric: any) {
      this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
  }

}
