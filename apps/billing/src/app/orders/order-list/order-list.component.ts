import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'businx-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  private id;

  constructor(private readonly route: ActivatedRoute) { }

  /**
   * This function made a query snapshot at the URL and verify if the given URL parameter
   * exists; It returns the value if exists, otherwise an empty string.
   *
   * @param {string} paramName Indicates the name of param to find at URL
   */
  findUrlParam(paramName: string): string {
    const { paramMap } = this.route.snapshot;

    if (paramName.length < 0 || !paramMap.has(paramName))
      return;

    return paramMap.get(paramName);
  }

  ngOnInit() {
    this.id = this.findUrlParam('id');
  }

}
