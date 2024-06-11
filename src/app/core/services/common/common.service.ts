import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from 'src/app/core/models/IResponseType';
import { environment } from 'src/environments/environment';
import { programFolderNames, stateProgramsFolderNames } from '../../config/configMapping';
import { IReportDataPayload } from '../../models/IReportDataPayload';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnDestroy {
  private storageKey = 'vsk.py.gov.in';
  // private storageKey = 'http://127.0.0.1:4200/';
  private currentTabId: string;

  constructor(private readonly _http: HttpClient) {
    this.checkForMultipleTabs();
    this.currentTabId = this.generateTabId();
    this.incrementTabCount();
    window.addEventListener('storage', this.handleStorageEvent.bind(this));
    window.addEventListener('beforeunload', this.decrementTabCount.bind(this));
   }
  
  getReportData(data: IReportDataPayload): Observable<ResponseType<any>> {
    return this._http.post<ResponseType<any>>(`${environment.apiURL}/common/getReportData`, data);
  }

  getReportDataNew(query: string): Observable<ResponseType<any>> {
    // return this._http.get<ResponseType<any>>(`http://localhost:3005/api/query?sql=${query}`);
    return this._http.post<ResponseType<any>>(`${environment.apiURL}/query`, {"query": query});
  }
  
  getDashboardMetrics(): Observable<ResponseType<any>> {
    return this._http.get<ResponseType<any>>(`${environment.apiURL}/metric`);
    // return this._http.get<ResponseType<any>>('../../../assets/data/mock/metric.json');
  } 

  getGenrateToken(): Observable<ResponseType<any>> {
    return this._http.get<ResponseType<any>>(`${environment.apiURL}/generatejwt`);
  } 

  getMetaData(programName:any): Observable<ResponseType<any>> {
    let ProgramFolderName = stateProgramsFolderNames[programName] === '' ? programFolderNames[programName] : stateProgramsFolderNames[programName]
    return this._http.get<ResponseType<any>>(`${environment.apiURL}/lastmodified?ProgramName=${ProgramFolderName}`);
  }

  generateTabId(): string {
    return `${new Date().getTime()}-${Math.random()}`;
  }
checkForMultipleTabs(){
  const existingTabId = localStorage.getItem(this.storageKey);
  // alert(existingTabId)
  if (existingTabId) {
    // alert('You are opening multiple tabs. Some KPIs will be not allowed when you opne multiple tabs.');
    localStorage.removeItem('login_access');
    localStorage.setItem('login_access','login_public');
    window.close();
  } else {
    const newTabId = this.generateTabId();
    localStorage.setItem(this.storageKey, newTabId);
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem(this.storageKey);
    });
  }
}
incrementTabCount(): void {
  let tabCount = parseInt(localStorage.getItem(this.storageKey) || '0', 10);
  tabCount += 1;
  localStorage.setItem(this.storageKey, tabCount.toString());
}

handleStorageEvent(event: StorageEvent): void {
  if (event.key === this.storageKey) {
    // alert(`Number of open tabs: ${event.newValue}`);
  }
}
decrementTabCount(): void {
  let tabCount = parseInt(localStorage.getItem(this.storageKey) || '0', 10);
  tabCount = Math.max(0, tabCount - 1);
  localStorage.setItem(this.storageKey, tabCount.toString());
}
ngOnDestroy(): void {
  this.decrementTabCount();
  window.removeEventListener('storage', this.handleStorageEvent.bind(this));
  window.removeEventListener('beforeunload', this.decrementTabCount.bind(this));
}
}
