import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  showTodayDate() {
    return new Date();
  }
}
