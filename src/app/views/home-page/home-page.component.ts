

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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

  roles: any;
  constructor(public _common: CommonService, public router: Router, 
    public service: AppServiceComponent, private _rbacService: RbacService,
    private readonly _authenticationService: AuthenticationService) {
    // this.setToken()
    this.roles = rbacConfig.roles.filter((role: any, index: any) => {
      return rbacConfig.roles[index - 1]?.['skipNext'] !== true
    })
    if(environment.config === 'VSK') {
      this.roles = this.roles.filter((role: any, index: any) => {
        return role.value !== 0
      })
    }
  }

  ngOnInit(): void {

    // onSubmit() {
      
        let data = {
          username: 'vsk_py',
          password: 'Adminpy@123'
        }
        this._authenticationService.login(data).subscribe((res: any) => {
          const token = res.access_token
          const refreshToken = res.refresh_token
          localStorage.setItem('token', token)
          localStorage.setItem('refresh_token', refreshToken)
          // localStorage.setItem('userName', res.username)
          // localStorage.setItem('user_id', res.userId)
          this._authenticationService.startRefreshTokenTimer();
          this.router.navigate(['/home']);
        },
          err => {
            err = true;
          })
     
      
  
    // }

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

  onRoleSelect(role: any) {
    console.log(role.value);
    console.log(role);
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
