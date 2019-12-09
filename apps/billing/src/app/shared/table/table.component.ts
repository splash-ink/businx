import { Component, OnInit, Input } from '@angular/core';
import { Table } from './table';

@Component({
  selector: 'businx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('table-config') config: Table;

  constructor() { }

  getFirst(name: string): string {
    return typeof name === 'string' ? name.substr(0,1) : '*';
  }

  abbreviateName(name: string) {
    const _names = name.split(" ");
    return this.getFirst(_names[0]) + this.getFirst(_names[_names.length - 1]);
  }

  descOrder = (a, b) => {
    if(a.key < b.key) return b.key;
  }


  getColor() {
    const colors = [
      'bg-gradient-primary',
      'bg-gradient-success',
      'bg-gradient-danger',
      'bg-gradient-warning',
      'bg-gradient-info'
    ];

    const random = Math.floor(Math.random() * 6);

    return colors[random];
  }

  ngOnInit() {
  }

}
