import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsherPieChartComponent } from './absher-pie-chart.component';

describe('AbsherPieChartComponent', () => {
  let component: AbsherPieChartComponent;
  let fixture: ComponentFixture<AbsherPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsherPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsherPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
