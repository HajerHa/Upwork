import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {ServiceService} from '../service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-housing-pie-chart',
  templateUrl: './housing-pie-chart.component.html',
  styleUrls: ['./housing-pie-chart.component.css']
})
export class HousingPieChartComponent implements OnInit {
  displayedColumns: string[] = ['Text', 'WeekDay', 'Month', 'Day','Hour', 'Has_Hastag','Has_URL',
  'Fav_count', 'Is_Reply', 'Retweet_Count', 'Followers','Following','User','Screen_Name','In_ReplyTo_Screen_Name', 'Tweet_Hashtags', 'sentimentClass'];
  dataSource = new MatTableDataSource();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  
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
      backgroundColor: ['rgba(0,0,255,0.3)','rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
        },
  ];

  constructor(private myService: ServiceService ) { }

  ngOnInit() {
    
    this.myService.getHousingData().subscribe(data => {this.pieChartData = data['PieChart'][1],
      this.pieChartLabels = data['PieChart'][0] ,
    this.dataSource=data['Table'],
    this.mode = 'determinate'
    }
    )
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}

