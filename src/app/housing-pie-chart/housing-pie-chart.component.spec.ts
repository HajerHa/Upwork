import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingPieChartComponent } from './housing-pie-chart.component';

describe('HousingPieChartComponent', () => {
  let component: HousingPieChartComponent;
  let fixture: ComponentFixture<HousingPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
