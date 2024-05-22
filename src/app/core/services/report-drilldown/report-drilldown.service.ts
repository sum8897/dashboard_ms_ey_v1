import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { buildQuery, parseFilterToQuery, parseRbacFilter, parseTimeSeriesQuery } from 'src/app/utilities/QueryBuilder';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class ReportDrilldownService {

  drilldownData: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private readonly _dataService: DataService) { }

  emit(data: any): void {
    this.drilldownData.next(data);
  }

  async drilldown(event: any, rbacDetails: any, reportConfig: any, startDate: any, endDate: any, prevDrillDownDetails: any, filterValues?: any, matric_filter?:any, filterneed?:false) {

    console.log('event',event)
    console.log('inside report',rbacDetails);
    console.log('inside repo',prevDrillDownDetails);
      let { hierarchyLevel, id } = event ?? {}
      // console.log('hierachylelevel lin22',hierarchyLevel,id)
      
      let drillDownDetails, reportData;

      switch (Number(hierarchyLevel)) {
        case 1:
          drillDownDetails = {
            ...rbacDetails,
            state: id ? id : prevDrillDownDetails.state
          }
          break;
        case 2:
          drillDownDetails = {
            ...rbacDetails,
            district: id ? id : prevDrillDownDetails.district
          }
          break;
        case 3:
          drillDownDetails = {
            ...rbacDetails,
            block: id ? id : prevDrillDownDetails.block
          }
          break;
        case 4:
          drillDownDetails = {
            ...rbacDetails,
            cluster: id ? id : prevDrillDownDetails.cluster
          }
          break;
        case 5:
          drillDownDetails = {
            ...rbacDetails,
            school: id ? id : prevDrillDownDetails.school
          }
          break;
      }

      // let reportConfig = config;

      let { timeSeriesQueries, queries, levels, label, defaultLevel, filters, options } = reportConfig;
      let onLoadQuery;
      if (rbacDetails?.role) {
        filters.every((filter: any) => {
          if (Number(hierarchyLevel) === Number(filter.hierarchyLevel)) {
            queries = { ...filter?.actions?.queries }
            timeSeriesQueries = { ...filter?.timeSeriesQueries }
            Object.keys(queries).forEach((key) => {
              queries[key] = parseRbacFilter(queries[key], drillDownDetails)
              timeSeriesQueries[key] = parseRbacFilter(timeSeriesQueries[key], drillDownDetails)
            });
            return false
          }
          return true
        })
      }

      let types = Object.keys(queries)

      for(let i=0; i<types.length; i++) {
        if (startDate !== undefined && endDate !== undefined && Object.keys(timeSeriesQueries).length > 0) {
          onLoadQuery = parseTimeSeriesQuery(timeSeriesQueries[types[i]], startDate, endDate)
        }
        else {
          onLoadQuery = queries[types[i]]
        }
        

        let query = buildQuery(onLoadQuery, defaultLevel, undefined, undefined, startDate, endDate, types[i], undefined);
console.log('line no 82 inside drilldown services',query)
        let metricFilter = [...filterValues].filter((filter: any) => {
          return filter.filterType === 'metric'
        })

   
          filterValues.forEach((filterParams: any) => {
            query = parseFilterToQuery(query, filterParams)
          });

          console.log('typei',types[i])
        if (query && types[i] === 'table') {
          // this.getTableReportData(query, options);
          reportData = await this._dataService.getTableReportData(query, options);
        }
        else if (query && types[i] === 'barChart') {
          reportData = await this._dataService.getBarChartReportData(query, options, filters, defaultLevel);
        }
        else if (query && types[i] === 'map' && filterneed) {
          
          
          reportData = await await this._dataService.getMapReportData(query, options, matric_filter?matric_filter:undefined)
        }
        else if (query && types[i] === 'map_without_filter' && !filterneed) {
       
          reportData = await await this._dataService.getMapReportData(query, options, matric_filter?matric_filter:undefined)
        }
      }

      return {reportData, drillDownDetails}
  }
}
