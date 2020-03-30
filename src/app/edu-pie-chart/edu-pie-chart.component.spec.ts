import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduPieChartComponent } from './edu-pie-chart.component';

describe('EduPieChartComponent', () => {
  let component: EduPieChartComponent;
  let fixture: ComponentFixture<EduPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
