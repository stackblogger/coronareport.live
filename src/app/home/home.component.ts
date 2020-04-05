import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  summary: any;
  stateData: any;
  newCases: any;
  lastUpdatedInHours: number;
  @ViewChild('myCanvas', { static: true })
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;
  activeColumn: string;
  constructor(
    private _mainService: MainService
  ) { }

  ngOnInit() {
    this.getData();
    this.bindActiveColumn();
  }

  bindActiveColumn() {
    this.activeColumn = window.innerWidth <= 550 ? 'ACTV' : 'ACTIVE';
  }

  getLastUpdated(): void {
    this.lastUpdatedInHours = this.diffHours(new Date(),
      new Date(this.summary.lastupdatedtime
        .replace(/\//g, "-")
        .replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    );
  }

  diffHours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
  }

  getData(): void {
    this._mainService.getSummaryData().subscribe((response: any) => {
      this.data = response;
      this.data.statewise = this.data.statewise
        .sort((a, b) => b.confirmed - a.confirmed)
        .filter(x => x.confirmed !== '0');
      this.summary = this.data.statewise.find(x => x.state === 'Total');
      this.stateData = this.data.statewise.filter(x => x.state !== 'Total');

      // const total = Number(response.key_values[0].confirmeddelta);
      // const rec = Number(response.key_values[0].recovereddelta);
      // const deaths = Number(response.key_values[0].deceaseddelta);

      // const total = Number(this.summary.confirmed) - Number(this.data.cases_time_series[this.data.cases_time_series.length - 2].totalconfirmed);
      // const rec = Number(this.summary.recovered) - Number(this.data.cases_time_series[this.data.cases_time_series.length - 2].totalrecovered);
      // const deaths = Number(this.summary.deaths) - Number(this.data.cases_time_series[this.data.cases_time_series.length - 2].totaldeceased);

      const total = Number(this.summary.deltaconfirmed);
      const rec = Number(this.summary.deltarecovered);
      const deaths = Number(this.summary.deltadeaths);

      this.newCases = {
        total: total,
        active: (total - (rec + deaths)) < 0 ? 0 : (total - (rec + deaths)),
        recovered: rec < 0 ? 0 : rec,
        deaths: deaths < 0 ? 0 : deaths
      }

      this.prepareChartData();

      this.getLastUpdated();
    })
  }

  prepareChartData() {
    const months = this.data.cases_time_series.map(x => x.date.split(' ')[1]).filter((item, i, ar) => ar.indexOf(item) === i);
    let data = [];
    months.forEach(month => {
      data.push(this.data.cases_time_series.filter(x => x.date.indexOf(month) > 0).map(x => Number(x.dailyconfirmed)).reduce((a, b) => a + b));
    });
    this.chartData = [{
      data: data,
      label: 'CONFIRMED CASES',
      fill: false
    }];
    this.chartLabels = months;

    this.bindGraph();
  }

  bindGraph(): void {
    this.chartColors = [{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(0, 0, 0, 1)'
    }];
    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
        drawTime: 'beforeDatasetsDraw',
        annotations: [{
          type: 'box',
          id: 'a-box-1',
          yScaleID: 'y-axis-0',
          yMin: 0,
          yMax: 1,
          backgroundColor: 'red'
        }, {
          type: 'box',
          id: 'a-box-2',
          yScaleID: 'y-axis-0',
          yMin: 1,
          yMax: 2.7,
          backgroundColor: '#fefe32'
        }, {
          type: 'box',
          id: 'a-box-3',
          yScaleID: 'y-axis-0',
          yMin: 2.7,
          yMax: 5,
          backgroundColor: '#fe3232'
        }]
      }
    }
  }
}
