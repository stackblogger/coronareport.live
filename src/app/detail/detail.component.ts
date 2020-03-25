import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  cityName: string;
  cityData: any;
  total: any;
  constructor(
    private _route: ActivatedRoute,
    private _mainService: MainService
  ) { }

  ngOnInit() {
    this.getCityName();
    this.getCityData();
  }

  getCityName(): void {
    this.cityName = this._route.snapshot.params.city;
  }

  getCityData(): void {
    this._mainService.getCityData().subscribe((response: any) => {
      this.cityData = response[this.cityName];
      this.cityData = Object.keys(this.cityData.districtData).map((key) => ({
        city: key,
        ...this.cityData.districtData[key]
      }));
      this.cityData = this.cityData.sort((a, b) => b.confirmed - a.confirmed);

      this.total = {
        confirmed: this.cityData.map(x => Number(x.confirmed)).reduce((a, b) => a + b),
        active: this.cityData.map(x => Number(x.active)).reduce((a, b) => a + b),
        deaths: this.cityData.map(x => Number(x.deaths)).reduce((a, b) => a + b),
        recovered: this.cityData.map(x => Number(x.recovered)).reduce((a, b) => a + b)
      }
    });
  }
}
