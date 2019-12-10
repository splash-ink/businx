import { Component, OnInit, Input } from '@angular/core';
import { ResumeCard } from './resume-card';

@Component({
  selector: 'businx-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css']
})
export class ResumeCardComponent implements OnInit {

  @Input('card-config') config: ResumeCard;
  constructor() { }

  monthlyGroth(prev, curr) {
    let t = prev - curr;
    t = t / prev;
    t = t * 100;
    return t * -1;
  }

  isGrowing(prev, curr) {
    return curr >= prev ? true : false;
  }

  ngOnInit() {
  }

}
