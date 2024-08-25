import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface DropdownOption {
  id: number;
  value: string;
  name: string;
}

@Component({
  selector: 'app-chart-filter-type',
  templateUrl: './chart-filter-type.component.html',
  styleUrls: ['./chart-filter-type.component.scss']
})
export class ChartFilterTypeComponent implements OnInit {
  @Input() options: DropdownOption[] = [];
  @Output() selected = new EventEmitter<string>();
  @Input() colSize: string = "md:col-span-3 xs:col-span-12 xmd:col-span-4 4k:col-span-2";
  selectedValue: string;

  constructor() { }

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.selectedValue = this.options[0].value;
      this.selected.emit(this.selectedValue);
    }
  }

  onChange(event: any): void {
    this.selectedValue = event.target.value;
    this.selected.emit(this.selectedValue);
  }

}
