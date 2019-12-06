import { Component, OnInit, Input } from '@angular/core';

export interface ListItem {
  name: string,
  createdAt: number,
  projects: number,
  totalSales: number,
  activity: []
}
@Component({
  selector: 'businx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columns: string [];
  @Input() dataset?: ListItem [];
  @Input() isGraphic?: boolean;
  @Input() graphicalDataset?: Object;
  constructor() { }

  abbreviateName(name: string): string {
    return typeof name === 'string' ? name.substr(0,2) : '*';
  }

  ngOnInit() {
  }

}
