import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Table } from './table';

@Component({
  selector: 'businx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('table-config') config: Table;
  @Output('onDelete') fieldId? = new EventEmitter<string|number>();

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

  onDelete(value: string | number) {
    this.fieldId.emit(value);
  }

  ngOnInit() {
  }

}
