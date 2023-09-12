import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrowserDetectionService } from './browser-detection.service';
import { DeviceDetectionService } from './device-detection.service';
import { formatDateToDDMMYY } from 'src/app/utilities/DateFormatter';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  constructor(private _http: HttpClient, private _browserDetectionService: BrowserDetectionService, private _deviceDetectionService: DeviceDetectionService) { }

  saveTelemetry(eventData: any): Observable<any>  {
    let data = {
      date: formatDateToDDMMYY(new Date()),
      timestamp: new Date().getTime(),
      userId: localStorage.getItem('user_id'),
      deviceType: this._deviceDetectionService.getDeviceType(),
      userLocation: "",
      browserType: this._browserDetectionService.getBrowserType(),
      ...eventData
    };

    return this._http.post<any>(`${environment.apiURL}/captureTelemetry`, data);
  }
}
