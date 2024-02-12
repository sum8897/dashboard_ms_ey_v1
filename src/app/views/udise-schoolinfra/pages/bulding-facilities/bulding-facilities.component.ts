import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { UdiseSchoolinfraBuildingMapComponent } from './reports/udise-schoolinfra-building-map/udise-schoolinfra-building-map.component'; 
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { config } from '../../config/udise_schoolinfra_config';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-bulding-facilities',
  templateUrl: './bulding-facilities.component.html',
  styleUrls: ['./bulding-facilities.component.scss']
})
export class BuldingFacilitiesComponent implements OnInit {


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
  hasCommonFilters: boolean = false;
  bigNumberMetrics: any = [];
  tabLabel:any='Bulding & Facilities';
  @ViewChild('udiseschoolinframap') udiseSchoolinfraMap:UdiseSchoolinfraBuildingMapComponent;

constructor(private _wrapperService: WrapperService, private _rbacService: RbacService) {
  this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails;
  })
  }

  async ngOnInit(): Promise<void> {
  }

  async filterapplyRequest(): Promise<void> {
  if (this.hasCommonFilters) {
      // this.checkReport('electricity', 'map');
      this.filters = await this._wrapperService.constructCommonFilters(config.filters,this.tabLabel);
      this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      }
  else if(!this.hasCommonFilters){
  //    this.checkReport('electricity', 'map_without_filter');
      this.filters = [];
      this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters});
      
  }
      if (this.startDate === undefined && this.endDate === undefined && this.hasTimeSeriesFilters) {
          let endDate = new Date();
          let days = endDate.getDate() - this.defaultSelectedDays;
          let startDate = new Date();
          startDate.setDate(days);
          this.reportsData=[];
          this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters, timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
          }
      }

 

  async ngAfterViewInit(): Promise<void> {
  if (this.hasCommonFilters) {
      this.filters = await this._wrapperService.constructCommonFilters(config.filters,this.tabLabel);
      this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters, filterValues: this.filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      }
  else if(this.hasCommonFilters===false){
      this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters});
      
  }
  if (this.startDate === undefined && this.endDate === undefined && this.hasTimeSeriesFilters) {
      let endDate = new Date();
      let days = endDate.getDate() - this.defaultSelectedDays;
      let startDate = new Date();
      startDate.setDate(days);
      this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters, timeSeriesValues: { startDate: startDate?.toISOString().split('T')[0], endDate: endDate?.toISOString().split('T')[0] } });
      }
  }

  checkReport(key: string, reportType: string): Boolean {
  let reportConfig = config;
  let flag = false;
  // console.log(reportType);
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
  this.udiseSchoolinfraMap?.getReportData({ filterneed: this.hasCommonFilters,filterValues: filters.map((filter) => { return { ...filter, columnName: filter.valueProp, filterType: filter.id } }) });
      }

  timeSeriesUpdated(event: any): void {
  this.startDate = event?.startDate?.toDate().toISOString().split('T')[0]
  this.endDate = event?.endDate?.toDate().toISOString().split('T')[0]
  if (event?.startDate !== null && event?.endDate !== null) {
      this.reportsData = [];
      this.udiseSchoolinfraMap?.getReportData({filterneed: this.hasCommonFilters, timeSeriesValues: {startDate: this.startDate, endDate: this.endDate}});
      }
  }

  importBigNumberMetrics(bigNumberMetric: any) {
      this.bigNumberMetrics[bigNumberMetric.ind] = bigNumberMetric.data
  }


}