import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reject } from 'lodash';
import { configFiles } from 'src/app/core/config/configMapping';

import { IDashboardMenu } from 'src/app/core/models/IDashboardCard';
import { IMenuItem } from 'src/app/core/models/IMenuItem';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { parseRbacFilter } from 'src/app/utilities/QueryBuilder';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardMenu: IDashboardMenu[] | any;
  // isNvsk = environment.config.toLocaleLowerCase() === 'nvsk';
  isNvsk = false;
  rbacDetails: any;
  constructor(private readonly _commonService: CommonService, private readonly _router: Router, private readonly rbac: RbacService, private _wrapperService: WrapperService) {
    this.rbac.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails
    })
  }

  ngOnInit(): void {
    this.checkRbacLevel();
  }

  onClickOfDashboardItem(cardInfo: IDashboardMenu | undefined): void {
    if (cardInfo) {
      this._router.navigate([cardInfo.navigationURL.trim()]);
    }
  }

  checkRbacLevel() {
    const programIds = Object.keys(configFiles);
    const hierarchyLevels = {};
    programIds.forEach(key => {
      const programObject = configFiles[key];
      const reportNames = Object.keys(programObject);
      reportNames.forEach(reportName => {
        const reportObject = programObject[reportName];
        const filters = reportObject.filters;
        if (filters) {
          filters.forEach(element => {
            if (element.hierarchyLevel) {
              if (!hierarchyLevels[key]) {
                hierarchyLevels[key] = [];
              }
              if (!hierarchyLevels[key].includes(element.hierarchyLevel)) {
                hierarchyLevels[key].push(element.hierarchyLevel);
              }
            }
          });

        }
      });
    });

    this._commonService.getDashboardMetrics().subscribe(async (menuResult: any) => {
      this.dashboardMenu = [];
      let rbacDetails;
      let menuData = menuResult?.data

      for (let i = 0; i < menuData?.length; i++) {
        if (hierarchyLevels[menuData[i].programID]?.includes(String(this.rbacDetails?.role))) {

          let menuToDisplay: IMenuItem | any = {};
          menuToDisplay.title = menuData[i].programName;
          menuToDisplay.navigationURL = menuData[i].navigationUrl;
          menuToDisplay.icon = menuData[i].imageUrl;
          menuToDisplay.tooltip = menuData[i].tooltip;
          menuToDisplay.metrics = await this.getDashboardMetrics(configFiles[menuData[i].programID], this.rbacDetails);
          this.dashboardMenu?.push(menuToDisplay);
        }
      }
    })

  }

  getDashboardMetrics(programConfig: any, rbacDetails: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let metrics: any = []
        let reports = Object.keys(programConfig)
        for (let i = 0; i < reports.length; i++) {
          if (reports[i].indexOf('bignumber') > -1) {
            let reportFilters = programConfig[reports[i]]?.filters
            for (let j = 0; j < reportFilters.length; j++) {
              if (Number(reportFilters[j].hierarchyLevel) === Number(rbacDetails?.role)) {
                let query = parseRbacFilter(reportFilters[j]?.actions?.queries?.bigNumber, rbacDetails)
                let res = await this._wrapperService.runQuery(query)
                if (res) {
                  let metricData = {
                    value: String(res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property]) + [programConfig[reports[i]]?.options?.bigNumber?.valueSuffix],
                    name: programConfig[reports[i]]?.options?.bigNumber?.title
                  }
                  metrics.push(metricData)
                }
              }
            }
          }
        }
        resolve(metrics)
      } catch (error) {
        reject(error)
      }
    })
  }

}
