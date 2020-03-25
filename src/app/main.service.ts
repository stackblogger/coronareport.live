import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private _http: HttpClient
  ) { }

  getSummaryData() {
    return this._http.get(environment.dataApi);
  }
}
