import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from './apex-line.model';
import { ChartComponent } from 'ng-apexcharts';
import { AppStyles } from '../utils';

@Component({
  selector: 'businx-apex-line',
  templateUrl: './apex-line.component.html',
  styleUrls: ['./apex-line.component.css']
})
export class ApexLineComponent implements OnInit {

  @ViewChild('chart', { static: true }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private appStyles: AppStyles) {

    const { Style:{ colors, fonts } } = this.appStyles;

    this.chartOptions = {
      chart: {
        zoom: {
          enabled: !1
        },
        toolbar: {
          show: !1
        },
        dropShadow: {
          enabled: !1
        },
        type: 'line',
        height: 177,
        width: 600
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      series: [{
        name: "Ganhos",
        data: [
          12000,
          2000,
          10000,
          3000,
          1000,
          6000,
          4000,
          9000,
          5000,
          7000,
          8000,
          11000
        ]
      }],
      xaxis: {
        labels: {
          format: "MMM",
          style: {
            colors: colors.gray[600],
            fontSize: "14px",
            fontFamily: fonts.base,
            cssClass: "apexcharts-xaxis-label"
          }
        },
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !0,
            borderType: "solid",
            color: colors.gray[300],
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
        type: "datetime",
        categories: [
          "01/30/2020",
          "02/28/2020",
          "03/30/2020",
          "04/30/2020",
          "05/30/2020",
          "06/30/2020",
          "07/30/2020",
          "08/30/2020",
          "09/30/2020",
          "10/30/2020",
          "11/30/2020",
          "12/30/2020"
        ]
      },
      yaxis: {
        labels: {
          style: {
            color: colors.gray[600],
            fontSize: "12px",
            fontFamily: fonts.base
          }
        },
        axisBorder: {
          show: !1
        },
        axisTicks: {
          show: !0,
          color: colors.gray[300],
          offsetX: 0,
          offsetY: 0
        },
      },
      fill: {
        type: 'solid',
      },
      markers: {
        size: 4,
        strokeOpacity: .7,
        strokeColors: ['#fff'],
        strokeWidth: 3,
        hover: {
          size: 7
        }
      },
      grid: {
        borderColor: colors.gray[300],
        strokeDashArray: 5
      },
      dataLabels: {
        enabled: !1
      }
    }
  }

  ngOnInit() {
  }

}
