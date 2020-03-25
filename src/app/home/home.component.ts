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
  @ViewChild('myCanvas', { static: true })
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;
  constructor(
    private _mainService: MainService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this._mainService.getSummaryData().subscribe((response: any) => {
      this.data = response;
      this.data.statewise = this.data.statewise.sort((a, b) => b.confirmed - a.confirmed);
      this.summary = this.data.statewise.find(x => x.state === 'Total');
      this.stateData = this.data.statewise.filter(x => x.state !== 'Total');

      this.prepareChartData();
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
