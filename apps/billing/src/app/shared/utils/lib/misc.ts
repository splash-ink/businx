import { ActivatedRoute } from '@angular/router';

export class Misc {

  constructor(private readonly route: ActivatedRoute) {}

  getUrlParam(param: string): string {
    if (param.length < 0)
      return;

    return this.route.snapshot.paramMap.get(param);
  }
}
