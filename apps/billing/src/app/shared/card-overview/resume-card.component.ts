import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'businx-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css']
})
export class ResumeCardComponent implements OnInit {

  @Input() title: string;
  @Input() value: number;
  @Input() gradient? = 'bg-gradient-warning';
  @Input() icon: { collection: string, class: string }
  @Input() description: string;
  @Input() rate: {
    badge: 'badge-soft-success' | 'badge-soft-danger',
    arrow: 'fa-arrow-up' | 'fa-arrow-down'
  }
  constructor() { }

  ngOnInit() {
  }

}
