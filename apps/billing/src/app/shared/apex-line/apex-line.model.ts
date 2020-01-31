import {
  ApexChart,
  ApexPlotOptions,
  ApexStroke,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexGrid,
  ApexDataLabels
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  markers: ApexMarkers;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
}
