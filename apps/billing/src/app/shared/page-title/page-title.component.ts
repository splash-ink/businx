import { Component, Input, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'businx-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements AfterViewInit {

  @Input() title: string;
  @Input() target?: string;
  @Input() controls? = false;

  constructor() { }

  ngAfterViewInit() {
    $('#target').attr('data-target', this.target);
  }

}
