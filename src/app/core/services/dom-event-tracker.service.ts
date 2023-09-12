import { Injectable } from '@angular/core';
import { TelemetryService } from './telemetry.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DomEventTrackerService {

  constructor(private readonly _router: Router, private readonly _telemetryService: TelemetryService) { }

  onClick(event): void {
    const { pageName, eventName } = event;
    this._telemetryService.saveTelemetry({
      pageName: pageName ? pageName : this._router.url?.slice(1),
      pageEvent: "click",
      pageEventName: eventName ? eventName : "filter"
    }).subscribe(res => console.log('telemetry saved!!!'));;
  }

  onChange(event): void {
    const { pageName, eventName } = event;
    this._telemetryService.saveTelemetry({
      pageName: pageName ? pageName : this._router.url?.slice(1),
      pageEvent: "change",
      pageEventName: eventName ? eventName : "filter"
    }).subscribe(res => console.log('telemetry saved!!!'));;
  }
}
