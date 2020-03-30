import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPieChartComponent } from './health-pie-chart.component';

describe('HealthPieChartComponent', () => {
  let component: HealthPieChartComponent;
  let fixture: ComponentFixture<HealthPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
