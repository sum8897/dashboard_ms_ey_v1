

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppServiceComponent } from 'src/app/app.service';
import { rbacConfig } from 'src/app/shared/components/rbac-dialog/rbacConfig';
import { RbacService } from 'src/app/core/services/rbac-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomePageComponent implements OnInit {
  adminUrl;
  adminDashUrl;
  role;
  storage
  hideAdmin

  roles = rbacConfig.roles
  constructor(public router: Router, public service: AppServiceComponent, private _rbacService: RbacService) {

  }

  ngOnInit(): void {
    // this.adminUrl = environment.adminUrl;
    this.storage = window.localStorage;
    this.hideAdmin = localStorage.getItem('roleName') === 'admin' ? true : false;
    if (localStorage.getItem('roleName') !== 'admin') {
      //this.router.navigate(['/dashboard']);
    }

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin'])

  }

  onDashboard() {
    this.router.navigate(['/rbac'])
  }


  submit() {

    let obj = {
      'userid': localStorage.getItem('user_id'),
      'roleName': localStorage.getItem('roleName'),
      'userName': localStorage.getItem('userName'),
      'token': localStorage.getItem('token')
    }
  }

  onRoleSelect(value: any) {
    this._rbacService.setRbacDetails({role: value})
    this.router.navigate(['/rbac'])
  } 
  
}