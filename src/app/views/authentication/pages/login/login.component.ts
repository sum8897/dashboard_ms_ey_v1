import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { stateNames } from 'src/app/core/config/StateCodes';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import * as config from 'src/assets/config/ui_config.json'
import { rbacConfig } from 'src/app/shared/components/rbac-dialog/rbacConfig';
import { RbacService } from 'src/app/core/services/rbac-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminUrl;
  adminDashUrl;
  role;
  storage
  hideAdmin
  roles: any;

  isLoggedIn: boolean = false;
  loginObj: any;
  NVSK: boolean = true;


  otpForm!: FormGroup;
  passwordForm!: FormGroup
  stateName: any

  wrongOtp: boolean = false;
  public passwordMatch: boolean = false;
  tempSecret: string = '';
  error: boolean = false;
  roletype

  userStatus = ''
  qrcode
  adminUserId = '';
  otpUrl

  userName = ''
  errorMsg
  LoginForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  tempUserId: any;

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private readonly _authenticationService: AuthenticationService,private _rbacService: RbacService,) {
      if((localStorage.getItem('token')== null || localStorage.getItem('token')==='' || localStorage.getItem('token')=== undefined) && (localStorage.getItem('access_user')==null || localStorage.getItem('access_user')=='' || localStorage.getItem('access_user')==undefined)){
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('access_user'));
        // this.router.navigate(['/summary-statistics']);
        this.onSubmit();
      }else if(localStorage.getItem('access_user')==null || localStorage.getItem('access_user')=='' || localStorage.getItem('access_user')==undefined){
          // this.router.navigate(['/summary-statistics']);
          this.onSubmit();
      }else{

      }
   
    // this.onSubmit();
    // if (this._authenticationService.isUserLoggedIn()) {

    //   this.router.navigate(['/home']);
    // }
    // this.router.navigate(['/home']);
  }

  async ngOnInit(): Promise<void> {
  
    // if(localStorage.getItem('login_access')=='' || localStorage.getItem('login_access')==null || localStorage.getItem('login_access')==undefined){
    //   this.router.navigate(['/summary-statistics']);
    // }else{
      
    // }
    // this.onSubmit();
    let uiConfig = config;
    this.loginObj = uiConfig['loginObj'];

    this.isLoggedIn = await this._authenticationService.isUserLoggedIn();

    type userRoles = Array<{ id: number, text: string }>

    // if (this.isLoggedIn) {
    //   this.router.navigate(['/summary-statistics'])
    // }

    if (environment.config === 'VSK') {
      this.NVSK = false


      let names: any = stateNames;
      names.every((state: any) => {
        if (state.stateCode == environment.stateCode) {
          this.stateName = state.stateName;
          return false;
        }
        return true;
      });


      // this.passwordForm = this.formBuilder.group({
      //   username: ['', Validators.required],
      //   newPassword: ['', Validators.required],
      //   cnfpass: ['', Validators.required]
      // })

    }
    else {
      this.stateName = 'India'
    }

  }
  onSubmitPrivate(){
    let role= {
      id:"state",
      imageUrl: "state.png",
      name:"State Officer",
      roleImageUrl: "principle_role.png",
      value: 1
  }
  if (this.LoginForm.valid) {
    let data = {
      username: this.LoginForm.controls.userId.value,
      password: this.LoginForm.controls.password.value
    }
    this._authenticationService.login(data).subscribe((res: any) => {
      const token = res.access_token
      const refreshToken = res.refresh_token
      localStorage.setItem('token', token)
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('login_access', 'login_private')
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
        this.error = true;
      })
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
        localStorage.setItem('access_user','public_user');
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
          this.error = true;
        })
    }
    
    

  }



// }