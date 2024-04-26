import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppConfig } from './app.config';
import { HttpClient } from '@angular/common/http';
import { RbacService } from 'src/app/core/services/rbac-service.service';
import { AuthenticationService } from './core/services/authentication.service';
import { rbacConfig } from 'src/app/shared/components/rbac-dialog/rbacConfig';
declare const gtag: Function; // <------------Important: the declartion for gtag is required!
declare var dataLayer: Array<any>;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  roles:any;
  title = 'cQube National';
  loadingDataImg: boolean = false;
  constructor(private translate: TranslateService, private titleService: Title,
    private router: Router, private activatedRoute: ActivatedRoute, 
    public config: AppConfig, private http: HttpClient,
    private readonly _authenticationService: AuthenticationService,private _rbacService: RbacService,) {
    translate.setDefaultLang('en');
    translate.use('en');
    // if(localStorage.getItem('login_access')=='' || localStorage.getItem('login_access')==null || localStorage.getItem('login_access')==undefined){
    //  this.onSubmit();
    // }else{
      
    // }
    /** START : Code to Track Page View using gtag.js */

    // this.http.get('assets/config/globalconfig.json').pipe(
    //   map(data => ({
    //     ...data,
    //     track: environment.google_analytics_tracking_id
    //   }))
    // ).subscribe(async (data) => {
    //   await this.grabTheTrackIds(data)
    // });
    
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   gtag('event', 'page_view', {
    //     page_path: event.urlAfterRedirects
    //   })
    // })

    // //Add dynamic title for selected pages - Start
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     var title = this.getTitle(router.routerState, router.routerState.root).join(' > ');
    //     titleService.setTitle(title);
    //   }
    // });

  }
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  // collect that title data properties from all child routes
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
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
        password: 'Admin@123'
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
          console.log(err)
        })
    }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: any): void {

    //Triggered When the navigation starts
    if (event instanceof NavigationStart) {
      this.loadingDataImg = true;
    }
    //Triggered When the navigation ends
    if (event instanceof NavigationEnd) {
      this.loadingDataImg = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loadingDataImg = false;
    }
    //Triggered When the error occurrs while navigation
    if (event instanceof NavigationError) {
      this.loadingDataImg = false;
    }
  }

 async grabTheTrackIds(trackIds) {
    for (const [key, value] of Object.entries(trackIds)) {
      const gaTrackId = value;
      let customGtagScriptEle = document.createElement('script');
      customGtagScriptEle.async = true;
      customGtagScriptEle.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaTrackId;
      document.head.prepend(customGtagScriptEle);
  
      customGtagScriptEle.onload = () => {
        window['gtag'] = function() {
          dataLayer.push(arguments);
        };
        window['dataLayer'] = window['dataLayer'] || [];
        gtag('js', new Date());
        gtag('config', gaTrackId, { send_page_view: false });
      }
    }
  }
  

}
