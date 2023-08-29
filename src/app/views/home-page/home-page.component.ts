

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppServiceComponent } from 'src/app/app.service';
import { rbacConfig } from 'src/app/shared/components/rbac-dialog/rbacConfig';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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
  NVSK: any = true;

  roles: any;
  constructor(public _common: CommonService, public router: Router, public service: AppServiceComponent, private _rbacService: RbacService, private activatedRoute: ActivatedRoute, private readonly _authService: AuthenticationService) {
    // this.setToken()
    this.roles = rbacConfig.roles.filter((role: any, index: any) => {
      return rbacConfig.roles[index - 1]?.['skipNext'] !== true
    })
    if(environment.config === 'VSK') {
      this.NVSK = false;
      this.roles = this.roles.filter((role: any, index: any) => {
        return role.value !== 0
      })
    }
    else {
      this.roles = this.roles.filter((role: any, index: any) => {
        return role.value === 0
      })
    }
  }

  ngOnInit(): void {

    if(this.activatedRoute.snapshot.url[0].path === 'public-home' && JSON.parse(localStorage.getItem('user_roles'))?.indexOf('private_user') > -1) {
      this.router.navigate(['/home'])
    }

    
    else if(this.activatedRoute.snapshot.url[0].path === 'public-home' && (localStorage.getItem('token') === null)) {
      let data = {
        username: environment.guestUsername,
        password: environment.guestPassword
      }
      this._authService.login(data).subscribe((res: any) => {
        localStorage.clear()
        const token = res.access_token
        const refreshToken = res.refresh_token
        const programAccess = res.program_access
        const userRoles = res.roles
        const userId = res.userId
        localStorage.setItem('user_id', userId)
        localStorage.setItem('user_roles', JSON.stringify(userRoles))
        localStorage.setItem('program_access', JSON.stringify(programAccess))
        localStorage.setItem('token', token)
        localStorage.setItem('refresh_token', refreshToken)
        this._authService.startRefreshTokenTimer();
      })
    }
    this.storage = window.localStorage;
    this.hideAdmin = localStorage.getItem('roleName') === 'admin' ? true : false;
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

  onRoleSelect(role: any) {
    this._rbacService.setRbacDetails({ role: role.value, roleDetail: role })
    this.router.navigate(['/rbac'])
  }

  setToken() {
    this._common.getGenrateToken().subscribe((data: any) => {
      window.localStorage.removeItem('token');
      let tokenStored = localStorage.getItem('token');
      if (!tokenStored) {
        window.localStorage.setItem("token", JSON.stringify(data.token));
      }
    })
  }

}
