import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'businx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  abbreviateName(name: string): string {
    return typeof name === 'string' ? name.substr(0,2) : '*';
  }

  ngOnInit() {
  }

}
