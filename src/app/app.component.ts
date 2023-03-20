import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppConfig } from './app.config';
import { HttpClient } from '@angular/common/http';
declare const gtag: Function; // <------------Important: the declartion for gtag is required!

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cQube National';
  loadingDataImg: boolean = false;

  constructor(private translate: TranslateService, private titleService: Title,
    private router: Router, private activatedRoute: ActivatedRoute, public config: AppConfig, private http: HttpClient) {
    translate.setDefaultLang('en');
    translate.use('en');
    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      })
    })

    this.http.get('assets/config/globalconfig.json').pipe(map(data => {
      return data;
    })).subscribe((data) => {
      this.grabTheTrackIds(data)
    });

    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      })
    })
    /** END : Code to Track Page View  using gtag.js */

    //Add dynamic title for selected pages - Start
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join(' > ');
        titleService.setTitle(title);
      }
    });

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

  grabTheTrackIds(trackIds) {
    for (const [key, value] of Object.entries(trackIds)) {
      const gaTrackId = value;
      let customGtagScriptEle = document.createElement('script');
      customGtagScriptEle.async = true;
      customGtagScriptEle.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaTrackId;
      document.head.prepend(customGtagScriptEle);
      gtag('config', gaTrackId, { send_page_view: false });
    }
  }
  
}
