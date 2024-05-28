import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { filter } from 'lodash';

@Component({
  selector: 'app-bar-chat-six-items-per-page',
  templateUrl: './bar-chat-six-items-per-page.component.html',
  styleUrls: ['./bar-chat-six-items-per-page.component.scss']
})
export class BarChatSixItemsPerPageComponent implements OnInit {

  
  @Input() data: any;
  @Input() config: any;
  @Input() type: any = 'bar';
  @Input() pageSize: number = 10; // Default pageSize
  // @Input() type: any = 'horizontalBar';

  filterData: any;
  currentPage = 0;
  // pageSize = 10;

  ngOnInit() {
// console.log('inside barchart',this.data,this.config)
    this.filterData = { values: this.data.values.slice(0, this.pageSize) };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterData = { values: this.data.values.slice(0, this.pageSize) };
  }

  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.data.values.length);
      this.filterData = { values: this.data.values.slice(startIndex, endIndex) };
  
    if (event.pageIndex === 0) {
      this.currentPage = 0;
    } else if (event.pageIndex === Math.ceil(this.data.values.length / this.pageSize) - 1) {
      this.currentPage = Math.ceil(this.data.values.length / this.pageSize) - 1;
    }
    if(this.type == 'horizontalBar') {
      this.config = {
        ...this.config,
        options: {
          ...this.config?.options,
          height: (this.filterData.values.length* 15 + 150).toString()
        }
      }
    }
  }
  
}

