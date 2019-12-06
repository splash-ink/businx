import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'businx-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  abbreviateName(name: string): string {
    return typeof name === 'string' ? name.substr(0,2) : '*';
  }

  ngOnInit() {
  }

}
