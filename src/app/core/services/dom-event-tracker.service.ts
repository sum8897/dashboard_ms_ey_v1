import { Injectable } from '@angular/core';
import { TelemetryService } from './telemetry.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DomEventTrackerService {

  constructor(private readonly _router: Router, private readonly _telemetryService: TelemetryService) { }

  onClick(event): void {
    const { pagename, eventName } = event;
    this._telemetryService.saveTelemetry({
      pagename: pagename ? pagename : this._router.url?.slice(1),
      pageevent: "click",
      pageeventname: eventName ? eventName : "filter"
    }).subscribe(res => console.log('telemetry saved!!!'));;
  }

  onChange(event): void {
    const { pagename, eventName } = event;
    this._telemetryService.saveTelemetry({
      pagename: pagename ? pagename : this._router.url?.slice(1),
      pageevent: "change",
      pageeventname: eventName ? eventName : "filter"
    }).subscribe(res => console.log('telemetry saved!!!'));;
  }
}
