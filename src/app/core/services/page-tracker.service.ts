import { Injectable } from '@angular/core';
import { TelemetryService } from './telemetry.service';

@Injectable({
  providedIn: 'root'
})
export class PageTrackerService {

  previousRoute: string;
  startTime: Date;

  constructor(private readonly _telemetryService: TelemetryService) { }

  onPageChange(event): void {
    if (this.previousRoute && event.url !== this.previousRoute) {
      const now = new Date();
      this._telemetryService.saveTelemetry({
        pageName: this.previousRoute.slice(1),
        pageEvent: "onLoad",
        pageEventName: "onLoad",
        timeSpent: (now.getTime() - this.startTime.getTime()),
        timeIn: this.startTime.getTime(),
        timeOut: now.getTime() 
      }).subscribe(res => console.log('telemetry saved!!!'));
    }

    this.startTime = new Date();
    this.previousRoute = event.url;
  }
}
