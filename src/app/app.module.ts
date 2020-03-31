import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { AbsherPieChartComponent } from './absher-pie-chart/absher-pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HealthPieChartComponent } from './health-pie-chart/health-pie-chart.component';
import { HousingPieChartComponent } from './housing-pie-chart/housing-pie-chart.component';
import { EduPieChartComponent } from './edu-pie-chart/edu-pie-chart.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: 'abshar_charts', component: AbsherPieChartComponent },
{ path: 'health_charts', component: HealthPieChartComponent },
{ path: 'edu_charts', component: EduPieChartComponent },
{ path: 'housing_charts', component: HousingPieChartComponent }]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbsherPieChartComponent,
    HealthPieChartComponent,
    HousingPieChartComponent,
    EduPieChartComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    ChartsModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
