import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reject } from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { configFiles } from 'src/app/core/config/configMapping';

import { IDashboardMenu } from 'src/app/core/models/IDashboardCard';
import { IMenuItem } from 'src/app/core/models/IMenuItem';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { WrapperService } from 'src/app/core/services/wrapper.service';
import { formatNumberForReport } from 'src/app/utilities/NumberFomatter';
import { parseRbacFilter } from 'src/app/utilities/QueryBuilder';
import { environment } from 'src/environments/environment';
import { rbacConfig } from 'src/app/shared/components/rbac-dialog/rbacConfig';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardMenu: IDashboardMenu[] | any;
  roles:any;
  // isNvsk = environment.config.toLocaleLowerCase() === 'nvsk';
  isNvsk = false;
  rbacDetails: any;
  constructor(private spinner: NgxSpinnerService,private readonly _commonService: CommonService,
     private readonly _router: Router, private readonly rbac: RbacService, private _wrapperService: WrapperService,
     private _rbacService: RbacService,private router: Router,
     private readonly _authenticationService: AuthenticationService) {
      if(localStorage.getItem('login_access')=='' || localStorage.getItem('login_access')==null || localStorage.getItem('login_access')==undefined){
      // alert('not loggedin');
        this.onSubmit();
      }else{

      }
    

    this.rbac.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails
    })
  }

  ngOnInit(): void {
    this.checkRbacLevel();
  }

  onClickOfDashboardItem(cardInfo: IDashboardMenu | undefined): void {
    // alert(cardInfo.title);
    // alert(localStorage.getItem('login_access')=='login_public'); 
    if (cardInfo) {
      if((cardInfo.title=='UDISE School Infrastructure' || cardInfo.title=='School General' || cardInfo.title=='PAS') && (localStorage.getItem('login_access')=='login_public')){
        this.router.navigate(['/login']);
      }else{
        this._router.navigate([cardInfo.navigationURL.trim()]);
      }
    }
  }
  onSubmit() {
    let role= {
      id:"state",
      imageUrl: "state.png",
      name:"State Officer",
      roleImageUrl: "principle_role.png",
      value: 1
  }
  // if (this.LoginForm.valid) {
    let data = {
      // username: this.LoginForm.controls.userId.value,
      // password: this.LoginForm.controls.password.value
      username: 'vsk_py',
      password: 'Adminpy@123'
    }
    this._authenticationService.login(data).subscribe((res: any) => {
      const token = res.access_token
      const refreshToken = res.refresh_token
      localStorage.setItem('token', token)
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('login_access', 'login_public')
      // localStorage.setItem('userName', res.username)
      // localStorage.setItem('user_id', res.userId)
      this._authenticationService.startRefreshTokenTimer();
      this._rbacService.setRbacDetails({ role: role.value, roleDetail: {} })
      this.router.navigate(['/rbac']);
      this.roles = rbacConfig.roles.filter((role: any, index: any) => {
        return rbacConfig.roles[index - 1]?.['skipNext'] !== true
      })
      if(environment.config === 'VSK') {
        this.roles = this.roles.filter((role: any, index: any) => {
          return role.value !== 0
        })
      }

    },
      err => {
       console.log(err);
      })
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
           this.getDashboardMetrics(configFiles[menuData[i].programID], this.rbacDetails)
               .then(d => {
                 menuToDisplay.metrics = d;
               });
          this.dashboardMenu.push(menuToDisplay);
          console.log(this.dashboardMenu);
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
          if (metrics.length >= 2) {
            break;
          }

          if (reports[i].indexOf('bignumber') > -1 || reports[i].indexOf('metrics') > -1) {
            let reportFilters = programConfig[reports[i]]?.filters
            let currentLevelFilter = programConfig[reports[i]]?.filters.filter(fil => fil.hierarchyLevel == Number(rbacDetails?.role))[0]
            // for (let j = 0; j < reportFilters.length; j++) {
            //   if (Number(reportFilters[j].hierarchyLevel) === Number(rbacDetails?.role)) {
            //     if (reportFilters[j]?.actions?.queries?.bigNumber) {
            //       let query = parseRbacFilter(reportFilters[j]?.actions?.queries?.bigNumber, rbacDetails)
            //       let res = await this._wrapperService.runQuery(query)
            //       if (res && res.length > 0) {
            //         let metricData = {
            //           value: res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property] !== null ? String(res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property]) + [programConfig[reports[i]]?.options?.bigNumber?.valueSuffix] : res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property],
            //           name: programConfig[reports[i]]?.options?.bigNumber?.title
            //         }
            //         if (metricData.value !== null && metricData !== undefined) {
            //           metrics.push(metricData)
            //         }
            //       }
            //     }
            //     else {
            //       let metricQueries = reportFilters[j]?.actions?.queries;
            //       let metricQueriesKeys = Object.keys(reportFilters[j]?.actions?.queries);
            //       for (let k = 0; k < metricQueriesKeys.length; k++) {
            //         if (metrics.length >= 2) {
            //           break;
            //         }
            //         else if (metricQueriesKeys[k].indexOf('bigNumber')) {
            //           let query = parseRbacFilter(metricQueries[metricQueriesKeys[k]], rbacDetails)
            //           let res = await this._wrapperService.runQuery(query)
            //           if (res && res.length > 0) {
            //             let metricData = {
            //               value: res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property] !== null ? String(res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property]) + [programConfig[reports[i]]?.options?.bigNumber?.valueSuffix] : res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property],
            //               name: programConfig[reports[i]]?.options?.bigNumber?.title
            //             }
            //             if (metricData.value !== null && metricData !== undefined) {
            //               metrics.push(metricData)
            //             }
            //           }
            //         }
            //       }
            //     }

            //   }
            // }
            if (currentLevelFilter !== undefined) {
              let metricQueries = currentLevelFilter?.actions?.queries;
              let metricQueriesKeys = Object.keys(metricQueries);
              console.log("cvbn:",{metricQueriesKeys,currentLevelFilter,metricQueries})
              for (let k = 0; k < metricQueriesKeys?.length; k++) {
                if (metrics.length >= 2) {
                  break;
                }
                else if (metricQueriesKeys[k].indexOf('bigNumber') > -1) {
                  let query = parseRbacFilter(metricQueries[metricQueriesKeys[k]], rbacDetails)
                  let res = await this._wrapperService.runQuery(query)
                  if (res && res.length > 0) {
                    let metricData = {
                      value: Array.isArray(programConfig[reports[i]]?.options?.bigNumber?.property) ? String(formatNumberForReport(res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property[k]])) + [programConfig[reports[i]]?.options?.bigNumber?.valueSuffix[k]] : String(formatNumberForReport(res[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property])) + [programConfig[reports[i]]?.options?.bigNumber?.valueSuffix],
                      name: Array.isArray(programConfig[reports[i]]?.options?.bigNumber?.title) ? programConfig[reports[i]]?.options?.bigNumber?.title[k] : programConfig[reports[i]]?.options?.bigNumber?.title
                    }
                    if((Array.isArray(programConfig[reports[i]]?.options?.bigNumber?.property) ? res?.[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property[k]] : res?.[0]?.[programConfig[reports[i]]?.options?.bigNumber?.property]) === null) {
                      metricData.value = Array.isArray(programConfig[reports[i]]?.options?.bigNumber?.valueSuffix) ? '0' + programConfig[reports[i]]?.options?.bigNumber?.valueSuffix[k] : '0' + programConfig[reports[i]]?.options?.bigNumber?.valueSuffix
                    }
                    if (metricData.value !== null && metricData !== undefined) {
                      metrics.push(metricData)
                      // console.log(metricData.value)
                    }
                  }
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