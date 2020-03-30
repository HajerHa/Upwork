import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-edu-pie-chart',
  templateUrl: './edu-pie-chart.component.html',
  styleUrls: ['./edu-pie-chart.component.css']
})
export class EduPieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] =[]// ['Positive', "Negative", 'Natural'];
  public pieChartData: number[] =[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private myService: ServiceService ) { }

  ngOnInit() {
    this.myService.getEduData().subscribe(data => {this.pieChartData = data[1],
      this.pieChartLabels = data[0]}
    )
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



}

