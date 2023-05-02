import { Component, OnInit } from '@angular/core';
import { RbacService } from 'src/app/core/services/rbac-service.service';

@Component({
  selector: 'app-breadcrumb-component',
  templateUrl: './breadcrumb-component.component.html',
  styleUrls: ['./breadcrumb-component.component.scss']
})
export class BreadcrumbComponentComponent implements OnInit {

  rbacDetails: any;

  constructor(private _rbacService: RbacService) {
    this._rbacService.getRbacDetails().subscribe((rbacDetails: any) => {
      this.rbacDetails = rbacDetails
    })
  }

  ngOnInit(): void {

  }

}