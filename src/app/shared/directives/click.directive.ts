import { Directive, ElementRef, HostListener } from '@angular/core';
import { DomEventTrackerService } from 'src/app/core/services/dom-event-tracker.service';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(private el: ElementRef, private readonly _domEventTrackerService: DomEventTrackerService) { }

  @HostListener('click') onClick() {
    const eventName = this.el.nativeElement.getAttribute("data-event-name");
    const pageName = this.el.nativeElement.getAttribute("data-page-name");
    this._domEventTrackerService.onClick({
      eventName,
      pageName
    });
  }

}
