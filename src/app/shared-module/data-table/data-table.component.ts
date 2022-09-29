import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() dataList: any;
  records!: Array<any>;
  list: any = [];
  keyList: any = [];
  valueList: any = [];
  key: any = [];
  values: any = [];
  currentPage = 1;
  total!: string;
  evenIndex!: boolean;
  sortDir = 1;
  isDesc: boolean = false;
  column!: string;
  constructor() { }

  ngOnInit(): void {
    this.total = this.dataList.length;
    this.getRowsAndColumns();
  }

  ngOnChanges(): void {
  }

  getRowsAndColumns() {
    this.dataList.map((data: any, index: any) => {
      this.key.push(Object.keys(data));
      if (index %2 == 0) {
        this.evenIndex = true;
      } else {
        this.evenIndex = false;
      }
      this.values.push(Object.values(data))
    });
    this.keyList = this.key[0];
    this.values.map((value: any) => {
      this.valueList.push(value);
    });
    console.log(this.values)
  }

  onClickUpArrow(event: any) {
    console.log("asc", event)
  }

  onClickDownArrow(event: any) {
    console.log("desc", event)
  }

  onClickAction(event: any) {
    console.log(event)
  }

}
