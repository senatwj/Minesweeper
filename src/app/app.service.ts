import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

  private mathUrl = 'http://api.mathjs.org/v1/?expr=';

  constructor(private http: HttpClient) {

  }


  getSquareRootOfNumber(number: number, precision: number = 2): Observable<any> {
    return this.http.get(this.mathUrl + `sqrt(${number})&precision=${precision}`);
  }

}
