import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { WrapperService } from 'src/app/core/services/wrapper.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnChanges {

  @Input() filters: any[] = [];
  @Input() colSize: string = "md:col-span-3 xs:col-span-12 xmd:col-span-4 4k:col-span-2";
  @Input() resetOthers: boolean = false;
  @Input() isMulti: boolean = false;
  @Input() hideClearButton: boolean = true; // Default value set to true

  @Output() filtersUpdated = new EventEmitter<any>();
  @Output() filterIndexUpdated = new EventEmitter<number>();

  constructor(private _wrapperService: WrapperService) { }

  ngOnInit(): void {
  
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isMulti) {
      this.filters.forEach(filter => {
        console.log('this',this.filters);
        filter.value = [filter.options[0]?.value]; // Set the first option as an array
      });
      this.hideClearButton=false;
    }
  }

  onSelectOption(event: any, ind: number, selectRef: any): void {
    if (this.resetOthers) {
      for (let i = ind + 1; i < this.filters.length; i++) {
        this.filters[i].value = null;
      }
    }
    if(this.filters[ind].child)
    {
      this.filters = this._wrapperService.runChildQuery(this.filters,ind);
    }
   // this._wrapperService.runChildQuery(filters);

    this.filtersUpdated.emit(this.filters);
    this.filterIndexUpdated.emit(ind);



    // Close the dropdown after selecting an option
    if (selectRef.isOpen) {
      selectRef.close();
    }
  }

  clearFilters(): void {
    this.filters.forEach(filter => {
      filter.value = [filter.options[0]?.value]; // Set the first option as an array
    });

    this.filtersUpdated.emit(this.filters);
  }

  isFilterMulti(): boolean {
    return this.isMulti;
  }
}
