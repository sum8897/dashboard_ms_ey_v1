import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  constructor(private deviceService: DeviceDetectorService) {}

  getDeviceType(): string {
    if (this.deviceService.isDesktop()) {
      return 'Desktop';
    } else if (this.deviceService.isTablet()) {
      return 'Tablet';
    } else if (this.deviceService.isMobile()) {
      return 'Mobile';
    } else {
      return 'Unknown';
    }
  }
}
