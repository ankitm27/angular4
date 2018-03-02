import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CheckService {

  constructor(private http:Http) {
  }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
