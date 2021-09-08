import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'demo-graph',
  templateUrl: './demo-graph.component.html',
  styleUrls: ['./demo-graph.component.scss'],
})
export class DemoGraphComponent implements OnInit {
  options!: EChartsOption;
  mergeOptions : any;
  data: any[] =[];
  
  constructor() {}
  ngOnInit(): void {
    this.graphLoad();
    /*
    const xAxisData = [];
    const dataLength = 10;
    
   
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < dataLength; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
   
    this.options = {
      toolbox: {
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: {
          },
          selfButtons: {
            show: true,
            title: 'Custom',
            icon: '../../assets/zoom.png', //icon
            option: {},
            onclick: function () {
              alert('1');
            },
          },
        },
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'line',
          type: 'line',
          data: data1,
          smooth: true,
          animationDelay: (idx: any) => idx * 10,
        },
        {
          name: 'line',
          type: 'line',
          data: data2,
          animationDelay: (idx: any) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: any) => idx * 5,
    };
    */
  }

  graphLoad() {
    this.options = {
      title: {
        text: 'Graph 1',
        subtext: 'Sample Graph',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false,
        },
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          xAxisIndex: [0],
        },
      ],
      grid: [
        {
          left: 50,
          right: 50,
          height: '50%',
        },
      ],
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: { onZero: true },
          data: ['0-10', '10-20', '20-30', '30-10', '10-20', '20-30'],
        },
      ],
      yAxis: [
        {
          name: 'Counts',
          type: 'value',
          max: 60,
        },
      ],
    };
  }

  btnUSA() {
    this.data.push({
      name: 'USA',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: 'orange',
      data: [20, 30, 22, 45, 33, 18, 10, 4, 33, 6],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
    console.log(this.mergeOptions)
    
  
  }



  btnSriLanka(){
      this.data.push({
        name: 'Sri Lanka',
        type: 'line',
        symbolSize: 8,
        hoverAnimation: true,
        color: 'pink',
        data: [5, 5, 20, 45, 45, 48, 10, 4, 33, 16],
        smooth: true,
        animationDelay: (idx: any) => idx * 10,
      });
      this.mergeOptions = {
        series:this.data
      };
  }


  btnCanada() {
    this.data.push({
          name: 'Canada',
          type: 'line',
          symbolSize: 8,
          hoverAnimation: true,
          color: 'red',
          data: [3, 5, 6, 10, 15, 18, 40, 26, 33, 12],
          smooth: true,
          animationDelay: (idx: any) => idx * 10,
        });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnIndia() {
    this.data.push({
      name: 'India',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: 'blue',
      data: [13, 50, 46, 10, 15, 18, 40, 26, 33, 12],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }
  btnChina(){
    this.data.push({
      name: 'Chaina',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: 'gray',
      data: [30, 10, 55, 10, 0, 18, 60, 32, 33, 6],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnSingapore(){
    this.data.push({
      name: 'Singapore',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: 'violet',
      data: [0, 60, 44, 10, 10, 18, 60, 1, 5, 6],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnVietnam(){
    this.data.push({
      name: 'Vietnam',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#FA8072',
      data: [0, 20, 48, 1, 10, 6, 60, 1, 5, 6],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnIndonesia(){
    this.data.push({
      name: 'Indonesia',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#7DCEA0',
      data: [9, 7, 6, 5, 10, 60, 60, 40, 20, 8],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnBrazil(){
    this.data.push({
      name: 'Brazil',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#F8C471',
      data: [5, 7, 6, 5, 10, 4, 6, 8, 20, 14],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  
  btnBangladesh(){
    this.data.push({
      name: 'Bangladesh',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#1D8348',
      data: [15, 27, 16, 15, 10, 40, 60, 45, 7, 6],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnRussia(){
    this.data.push({
      name: 'Russia',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#34495E',
      data: [50, 33, 45, 5, 10, 9, 6, 5, 17, 60],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnMexico(){
    this.data.push({
      name: 'Mexico',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#3498DB',
      data: [10, 23, 5, 5, 18, 17, 16, 50, 48, 52],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnJapan(){
    this.data.push({
      name: 'Japan',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#AF7AC5',
      data: [0, 5, 10, 15, 20, 15, 10, 5, 5, 5],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnEthiopia(){
    this.data.push({
      name: 'Ethiopia',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#F7DC6F',
      data: [10, 5, 10, 15, 60, 15, 10, 5, 25, 15],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnPhilippines(){
    this.data.push({
      name: 'Philippines',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#943126',
      data: [0, 5, 10, 15, 60, 5, 10, 25, 50, 15],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnEgypt(){
    this.data.push({
      name: 'Egypt',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#839192',
      data: [0, 0, 10, 10, 30, 30, 0, 20, 20, 20],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnTurkey(){
    this.data.push({
      name: 'Turkey',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#E6B0AA',
      data: [2, 4, 8, 16, 32, 36, 38, 45, 48, 60],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnIran(){
    this.data.push({
      name: 'Iran',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#9A7D0A',
      data: [21, 41, 11, 16, 32, 36, 38, 45, 48, 0],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnItaly(){
    this.data.push({
      name: 'Italy',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#9A7D0A',
      data: [1, 20, 8, 16, 4, 3, 45, 45, 48, 10],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }

  btnFrance(){
    this.data.push({
      name: 'France',
      type: 'line',
      symbolSize: 8,
      hoverAnimation: true,
      color: '#884EA0',
      data: [55, 55, 28, 16, 4, 3, 60, 48, 48, 60],
      smooth: true,
      animationDelay: (idx: any) => idx * 10,
    });
    this.mergeOptions = {
      series:this.data
    };
  }
}
