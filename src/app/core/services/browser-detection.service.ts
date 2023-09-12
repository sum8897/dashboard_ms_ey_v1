import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectionService {

  constructor() { }

  getBrowserType(): string {
    const userAgent = window.navigator.userAgent;
    
    if (userAgent.indexOf('Chrome') !== -1) {
      return 'Chrome';
    } else if (userAgent.indexOf('Firefox') !== -1) {
      return 'Firefox';
    } else if (userAgent.indexOf('Safari') !== -1) {
      return 'Safari';
    } else if (userAgent.indexOf('Edge') !== -1) {
      return 'Edge';
    } else if (userAgent.indexOf('IE') !== -1 || userAgent.indexOf('Trident/') !== -1) {
      return 'Internet Explorer';
    } else {
      return 'Unknown';
    }
  }
}
