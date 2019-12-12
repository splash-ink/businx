import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'businx-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() title: string;
  @Input() target?: string;
  @Input() controls? = false;

  constructor() { }

  ngOnInit() {
    $('#target').attr('data-target', this.target);
  }

}
