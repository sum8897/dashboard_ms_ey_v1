import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { config } from './config/pgi-govt-aided_config';

@Component({
  selector: 'app-pgi-govt-aided',
  templateUrl: './pgi-govt-aided.component.html',
  styleUrls: ['./pgi-govt-aided.component.scss']
})
export class PgiGovtAidedComponent implements OnInit {

  loadTabs = false;
  tabIndex;
  rbacDetails: any;
  selectedTabLabel;
  tabs: any = [];
  programName : any = 'pgiSchoolSafety'
 
  constructor(private route: ActivatedRoute, private _rbacService: RbacService, private _commonService: CommonService) { 
    this.route.queryParams.subscribe((param: any) => {
        this.tabIndex = param.tab ? Number(param.tab) : 0;
    })
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
        this.rbacDetails = rbacDetails;
    })
    let allTabs = [...Object.keys(config)]
    console.log(allTabs);
    allTabs.forEach((tab: any) => {
        config?.[tab]?.filters?.every((filter) => {
        if((Number(filter?.hierarchyLevel) === this.rbacDetails?.role) || this.rbacDetails?.role === 0){
            if(!(this.tabs.includes(config?.[tab]?.label))){
            this.tabs.push(config?.[tab]?.label)
            console.log(this.tabs);
            }
            return false
        }
        return true
        })
    })

     }

  ngOnInit(): void {
    // console.log("programname",this.programName)
    // this._commonService.getMetaData(this.programName).subscribe()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
        this.selectedTabLabel = this.tabs.length > 0 ? this.tabs[0] : undefined
    });
    }


  onTabChanged($event: any): void {
    this.selectedTabLabel = $event?.tab?.textLabel;
    this.tabIndex = $event.index;
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        console.log('resize');
    }, 100);
    }

}

