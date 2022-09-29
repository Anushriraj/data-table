import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class DataTableModule { }
