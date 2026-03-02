import{a as f,b as O}from"./chunk-BR7JXJDR.js";import{a as w}from"./chunk-PCBTY662.js";import{ya as y}from"./chunk-TMQKUFFU.js";import"./chunk-DDMMGWE3.js";import"./chunk-ROVHELIW.js";import{e as g}from"./chunk-QN7NOS6U.js";import{b as D}from"./chunk-INFJILZO.js";import{e as b,f as T}from"./chunk-Y7E7CANW.js";import"./chunk-F6ZH6GOJ.js";import{Bc as a,Dc as d,Vc as m,Wb as r,Wc as c,Xb as o,Yb as n,Zb as p,jb as i,qc as x,rc as u,sc as A,zb as C}from"./chunk-UUJKCIGR.js";import"./chunk-6NE7JDAX.js";var v=`  <apx-chart [series]="areaChartOptions.series" [chart]="areaChartOptions.chart" [xaxis]="areaChartOptions.xaxis"
      [yaxis]="areaChartOptions.yaxis" [grid]="areaChartOptions.grid" [stroke]="areaChartOptions.stroke"
      [tooltip]="areaChartOptions.tooltip" [dataLabels]="areaChartOptions.dataLabels" [legend]="areaChartOptions.legend"
      [colors]="areaChartOptions.colors" [markers]="areaChartOptions.markers">
    </apx-chart>
`;var L=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title Area Chart */
     */
    @Component({
        selector: 'app-area',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './area.component.html'
    })
    export class AppAreaChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public areaChartOptions: Partial<ChartOptions> | any;

        constructor() {
          //Area chart.
          this.areaChartOptions = {
            series: [
              {
                name: 'Site A',
                data: [0, 300, 100, 200, 1200, 100, 500, 100],
              },
              {
                name: 'Site  B',
                data: [0, 500, 600, 800, 2800, 900, 800, 2200],
              },
            ],
            chart: {
              fontFamily: 'inherit',
              foreColor: '#a1aab2',
              height: 300,
              type: 'area',
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            markers: {
              size: 3,
            },
            stroke: {
              curve: 'smooth',
              width: '2',
            },
            colors: ['#398bf7', '#06d79c'],
            legend: {
              show: false,
            },
            grid: {
              show: true,
              strokeDashArray: 0,
              borderColor: 'rgba(0,0,0,0.1)',
              xaxis: {
                lines: {
                  show: true,
                },
              },
              yaxis: {
                lines: {
                  show: true,
                },
              },
            },
            xaxis: {
              type: 'category',
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            tooltip: {
              theme: 'dark',
            },
          };
        }
            
    }
`;var ee=["chart"],_=(()=>{class s{constructor(){this.codeForAreaChart=v,this.codeForAreaChartTs=L,this.chart=Object.create(null),this.areaChartOptions={series:[{name:"Site A",data:[0,300,100,200,1200,100,500,100]},{name:"Site  B",data:[0,500,600,800,2800,900,800,2200]}],chart:{fontFamily:"inherit",foreColor:"#a1aab2",height:300,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},markers:{size:3},stroke:{curve:"smooth",width:"2"},colors:["#398bf7","#06d79c"],legend:{show:!1},grid:{show:!0,strokeDashArray:0,borderColor:"rgba(0,0,0,0.1)",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},xaxis:{type:"category",categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{theme:"dark"}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-area"]],viewQuery:function(t,e){if(t&1&&x(ee,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:16,vars:17,consts:[[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","xaxis","yaxis","grid","stroke","tooltip","dataLabels","legend","colors","markers"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"app-code-view",0)(1,"h4",1),a(2),m(3,"translate"),n(),o(4,"div",2),p(5,"apx-chart",3),n(),o(6,"div",4)(7,"pre"),a(8,"      "),p(9,"code",5),a(10,`
    `),n()(),o(11,"div",6)(12,"pre"),a(13,"      "),p(14,"code",7),a(15,`
    `),n()()()),t&2&&(r("isTitle",!0),i(2),d(" ",c(3,15,"CHARTS.types.area")," "),i(3),r("series",e.areaChartOptions.series)("chart",e.areaChartOptions.chart)("xaxis",e.areaChartOptions.xaxis)("yaxis",e.areaChartOptions.yaxis)("grid",e.areaChartOptions.grid)("stroke",e.areaChartOptions.stroke)("tooltip",e.areaChartOptions.tooltip)("dataLabels",e.areaChartOptions.dataLabels)("legend",e.areaChartOptions.legend)("colors",e.areaChartOptions.colors)("markers",e.areaChartOptions.markers),i(4),r("highlight",e.codeForAreaChart),i(5),r("highlightAuto",e.codeForAreaChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var P=`  <apx-chart [series]="candlestickChartOptions.series" [chart]="candlestickChartOptions.chart"
      [xaxis]="candlestickChartOptions.xaxis" [yaxis]="candlestickChartOptions.yaxis"
      [grid]="candlestickChartOptions.grid" [stroke]="candlestickChartOptions.stroke"
      [tooltip]="candlestickChartOptions.tooltip" [plotOptions]="candlestickChartOptions.plotOptions"
      [dataLabels]="candlestickChartOptions.dataLabels" [legend]="candlestickChartOptions.legend"
      [colors]="candlestickChartOptions.colors" [markers]="candlestickChartOptions.markers">
    </apx-chart>
`;var M=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title Candlestick Chart */
     */
    @Component({
        selector: 'app-candlestick',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './candlestick.component.html'
    })
    export class AppCandlestickChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public candlestickChartOptions: Partial<ChartOptions> | any;

        constructor() {
          //doughnut chart.
          this.candlestickChartOptions = {
            series: [
              {
                data: [
                  {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11],
                  },
                  {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65],
                  },
                  {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24],
                  },
                  { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
                  {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31],
                  },
                  { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
                  {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02],
                  },
                  {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01],
                  },
                  {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02],
                  },
                  {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91],
                  },
                  {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612],
                  },
                  { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
                  {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95],
                  },
                  {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67],
                  },
                  { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
                  { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
                  {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45],
                  },
                  {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35],
                  },
                  {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53],
                  },
                  {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19],
                  },
                  { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
                  {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620],
                  },
                  {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61],
                  },
                  {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58],
                  },
                  {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86],
                  },
                  {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16],
                  },
                  { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
                  {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81],
                  },
                  {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578],
                  },
                  {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579],
                  },
                  {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96],
                  },
                  {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92],
                  },
                  {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22],
                  },
                  {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08],
                  },
                  { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
                  {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97],
                  },
                  {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602],
                  },
                  { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
                  {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02],
                  },
                  { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
                  { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
                  {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34],
                  },
                  {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86],
                  },
                  {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01],
                  },
                  {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25],
                  },
                  { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
                  {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81],
                  },
                  {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96],
                  },
                  {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39],
                  },
                  {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27],
                  },
                  { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
                  {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02],
                  },
                  {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01],
                  },
                  { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
                  {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89],
                  },
                  { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
                  {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86],
                  },
                  { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
                  { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
                ],
              },
            ],
            chart: {
              height: 350,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              foreColor: '#adb0bb',
              type: 'candlestick',
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#5D87FF',
                  downward: '#49BEFF',
                },
              },
            },
            tooltip: {
              theme: 'dark',
            },
            grid: {
              show: false,
            },
          };
        }
            
    }
`;var te=["chart"],E=(()=>{class s{constructor(){this.codeForCandlestickChart=P,this.codeForCandlestickChartTs=M,this.chart=Object.create(null),this.candlestickChartOptions={series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],chart:{height:350,fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",type:"candlestick",toolbar:{show:!1}},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},plotOptions:{candlestick:{colors:{upward:"#5D87FF",downward:"#49BEFF"}}},tooltip:{theme:"dark"},grid:{show:!1}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-candlestick"]],viewQuery:function(t,e){if(t&1&&x(te,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:16,vars:18,consts:[[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","xaxis","yaxis","grid","stroke","tooltip","plotOptions","dataLabels","legend","colors","markers"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"app-code-view",0)(1,"h4",1),a(2),m(3,"translate"),n(),o(4,"div",2),p(5,"apx-chart",3),n(),o(6,"div",4)(7,"pre"),a(8,"      "),p(9,"code",5),a(10,`
    `),n()(),o(11,"div",6)(12,"pre"),a(13,"      "),p(14,"code",7),a(15,`
    `),n()()()),t&2&&(r("isTitle",!0),i(2),d(" ",c(3,16,"CHARTS.types.candlestick")," "),i(3),r("series",e.candlestickChartOptions.series)("chart",e.candlestickChartOptions.chart)("xaxis",e.candlestickChartOptions.xaxis)("yaxis",e.candlestickChartOptions.yaxis)("grid",e.candlestickChartOptions.grid)("stroke",e.candlestickChartOptions.stroke)("tooltip",e.candlestickChartOptions.tooltip)("plotOptions",e.candlestickChartOptions.plotOptions)("dataLabels",e.candlestickChartOptions.dataLabels)("legend",e.candlestickChartOptions.legend)("colors",e.candlestickChartOptions.colors)("markers",e.candlestickChartOptions.markers),i(4),r("highlight",e.codeForCandlestickChart),i(5),r("highlightAuto",e.codeForCandlestickChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var N=`  <apx-chart [series]="columnChartOptions.series" [chart]="columnChartOptions.chart"
      [xaxis]="columnChartOptions.xaxis" [yaxis]="columnChartOptions.yaxis" [grid]="columnChartOptions.grid"
      [stroke]="columnChartOptions.stroke" [tooltip]="columnChartOptions.tooltip"
      [plotOptions]="columnChartOptions.plotOptions" [dataLabels]="columnChartOptions.dataLabels"
      [legend]="columnChartOptions.legend" [colors]="columnChartOptions.colors" [markers]="columnChartOptions.markers">
    </apx-chart>
`;var H=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title column Chart */
     */
    @Component({
        selector: 'app-column',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './column.component.html'
    })
    export class AppColumnChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
        public columnChartOptions: Partial<ChartOptions> | any;
        constructor() {
          //Column chart.
          this.columnChartOptions = {
            series: [
              {
                name: 'A',
                data: [400, 120, 140, 130, 200, 150, 140, 130, 300, 120, 140, 150],
              },
              {
                name: 'B',
                data: [200, 188, 242, 300, 200, 400, 230, 300, 200, 400, 180, 300],
              },
              {
                name: 'C',
                data: [100, 200, 400, 600, 100, 200, 400, 370, 240, 200, 280, 330],
              },
            ],
            chart: {
              fontFamily: 'DM Sans,sans-serif',
              foreColor: '#a1aab2',
              height: 300,
              type: 'bar',
              stacked: true,
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                columnWidth: '40%',
                barHeight: '40%',
              },
            },
            dataLabels: {
              enabled: false,
            },
            markers: {
              size: 3,
            },
            stroke: {
              curve: 'straight',
              width: '0',
            },
            colors: ['#398bf7', '#06d79c'],
            legend: {
              show: true,
            },
            grid: {
              show: true,
              strokeDashArray: 0,
              borderColor: 'rgba(0,0,0,0.1)',
              xaxis: {
                lines: {
                  show: true,
                },
              },
              yaxis: {
                lines: {
                  show: true,
                },
              },
            },
            xaxis: {
              type: 'category',
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            },
            tooltip: {
              theme: 'dark',
            },
          };
        }
`;var ae=["chart"],R=(()=>{class s{constructor(){this.codeForColumnChart=N,this.codeForColumnChartTs=H,this.chart=Object.create(null),this.columnChartOptions={series:[{name:"A",data:[400,120,140,130,200,150,140,130,300,120,140,150]},{name:"B",data:[200,188,242,300,200,400,230,300,200,400,180,300]},{name:"C",data:[100,200,400,600,100,200,400,370,240,200,280,330]}],chart:{fontFamily:"DM Sans,sans-serif",foreColor:"#a1aab2",height:300,type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"40%",barHeight:"40%"}},dataLabels:{enabled:!1},markers:{size:3},stroke:{curve:"straight",width:"0"},colors:["#398bf7","#06d79c"],legend:{show:!0},grid:{show:!0,strokeDashArray:0,borderColor:"rgba(0,0,0,0.1)",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"]},tooltip:{theme:"dark"}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-column"]],viewQuery:function(t,e){if(t&1&&x(ae,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:16,vars:18,consts:[[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","xaxis","yaxis","grid","stroke","tooltip","plotOptions","dataLabels","legend","colors","markers"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"app-code-view",0)(1,"h4",1),a(2),m(3,"translate"),n(),o(4,"div",2),p(5,"apx-chart",3),n(),o(6,"div",4)(7,"pre"),a(8,"      "),p(9,"code",5),a(10,`
    `),n()(),o(11,"div",6)(12,"pre"),a(13,"      "),p(14,"code",7),a(15,`
    `),n()()()),t&2&&(r("isTitle",!0),i(2),d(" ",c(3,16,"CHARTS.types.column")," "),i(3),r("series",e.columnChartOptions.series)("chart",e.columnChartOptions.chart)("xaxis",e.columnChartOptions.xaxis)("yaxis",e.columnChartOptions.yaxis)("grid",e.columnChartOptions.grid)("stroke",e.columnChartOptions.stroke)("tooltip",e.columnChartOptions.tooltip)("plotOptions",e.columnChartOptions.plotOptions)("dataLabels",e.columnChartOptions.dataLabels)("legend",e.columnChartOptions.legend)("colors",e.columnChartOptions.colors)("markers",e.columnChartOptions.markers),i(4),r("highlight",e.codeForColumnChart),i(5),r("highlightAuto",e.codeForColumnChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var I=`  <apx-chart [series]="columnChartOptions.series" [chart]="columnChartOptions.chart"
      [xaxis]="columnChartOptions.xaxis" [yaxis]="columnChartOptions.yaxis" [grid]="columnChartOptions.grid"
      [stroke]="columnChartOptions.stroke" [tooltip]="columnChartOptions.tooltip"
      [plotOptions]="columnChartOptions.plotOptions" [dataLabels]="columnChartOptions.dataLabels"
      [legend]="columnChartOptions.legend" [colors]="columnChartOptions.colors" [markers]="columnChartOptions.markers">
    </apx-chart>
`,V=`  <apx-chart [series]="columnChartOptions.series" [chart]="columnChartOptions.chart"
      [xaxis]="columnChartOptions.xaxis" [yaxis]="columnChartOptions.yaxis" [grid]="columnChartOptions.grid"
      [stroke]="columnChartOptions.stroke" [tooltip]="columnChartOptions.tooltip"
      [plotOptions]="columnChartOptions.plotOptions" [dataLabels]="columnChartOptions.dataLabels"
      [legend]="columnChartOptions.legend" [colors]="columnChartOptions.colors" [markers]="columnChartOptions.markers">
    </apx-chart>
`;var G=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title doughnut Chart */
     */
    @Component({
        selector: 'app-doughnut-pie',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './doughnut-pie.component.html'
    })
    export class AppDoughnutpieChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public doughnutChartOptions: Partial<ChartOptions> | any;

        constructor() {
          this.doughnutChartOptions = {
            series: [45, 15, 27, 18, 35],
            chart: {
              id: 'donut-chart',
              type: 'donut',
              height: 350,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              foreColor: '#adb0bb',
            },
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '70px',
                },
              },
            },
            legend: {
              show: true,
              position: 'bottom',
              width: '50px',
            },
            colors: ['#5D87FF', '#ECF2FF', '#49BEFF', '#E8F7FF', '#FFAE1F'],
            tooltip: {
              theme: 'dark',
              fillSeriesColor: false,
            },
          };
        }
`,B=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title doughnut Chart */
     */
    @Component({
        selector: 'app-doughnut-pie',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './doughnut-pie.component.html'
    })
    export class AppDoughnutpieChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public pieChartOptions: Partial<ChartOptions> | any;

        constructor() {
          this.pieChartOptions = {
            series: [45, 15, 27, 18, 35],
            chart: {
              id: 'pie-chart',
              type: 'pie',
              height: 350,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              foreColor: '#adb0bb',
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '70px',
                },
              },
            },
            legend: {
              show: true,
              position: 'bottom',
              width: '50px',
            },
            colors: ['#5D87FF', '#ECF2FF', '#49BEFF', '#E8F7FF', '#FFAE1F'],
            tooltip: {
              fillSeriesColor: false,
            },
          };
        }
`;var ie=["chart"],Q=(()=>{class s{constructor(){this.codeForDoughnutChart=I,this.codeForDoughnutChartTs=G,this.codeForPieChart=V,this.codeForPieChartTs=B,this.chart=Object.create(null),this.doughnutChartOptions={series:[45,15,27,18,35],chart:{id:"donut-chart",type:"donut",height:350,fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb"},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"70px"}}},legend:{show:!0,position:"bottom",width:"50px"},colors:["#5D87FF","#ECF2FF","#49BEFF","#E8F7FF","#FFAE1F"],tooltip:{theme:"dark",fillSeriesColor:!1}},this.pieChartOptions={series:[45,15,27,18,35],chart:{id:"pie-chart",type:"pie",height:350,fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1}},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"70px"}}},legend:{show:!0,position:"bottom",width:"50px"},colors:["#5D87FF","#ECF2FF","#49BEFF","#E8F7FF","#FFAE1F"],tooltip:{fillSeriesColor:!1}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-doughnut-pie"]],viewQuery:function(t,e){if(t&1&&x(ie,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:35,vars:26,consts:[[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","dataLabels","plotOptions","legend","colors","tooltip"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"app-code-view",2)(3,"h4",3),a(4),m(5,"translate"),n(),o(6,"div",4),p(7,"apx-chart",5),n(),o(8,"div",6)(9,"pre"),a(10,"          "),p(11,"code",7),a(12,`
        `),n()(),o(13,"div",8)(14,"pre"),a(15,"          "),p(16,"code",9),a(17,`
        `),n()()()(),o(18,"div",1)(19,"app-code-view",2)(20,"h4",3),a(21),m(22,"translate"),n(),o(23,"div",4),p(24,"apx-chart",5),n(),o(25,"div",6)(26,"pre"),a(27,"          "),p(28,"code",7),a(29,`
        `),n()(),o(30,"div",8)(31,"pre"),a(32,"          "),p(33,"code",9),a(34,`
        `),n()()()()()),t&2&&(i(2),r("isTitle",!0),i(2),d(" ",c(5,22,"CHARTS.types.doughnutTitle")," "),i(3),r("series",e.doughnutChartOptions.series)("chart",e.doughnutChartOptions.chart)("dataLabels",e.doughnutChartOptions.dataLabels)("plotOptions",e.doughnutChartOptions.plotOptions)("legend",e.doughnutChartOptions.legend)("colors",e.doughnutChartOptions.colors)("tooltip",e.doughnutChartOptions.tooltip),i(4),r("highlight",e.codeForDoughnutChart),i(5),r("highlightAuto",e.codeForDoughnutChartTs),i(3),r("isTitle",!0),i(2),d(" ",c(22,24,"CHARTS.types.pieTitle")," "),i(3),r("series",e.doughnutChartOptions.series)("chart",e.doughnutChartOptions.chart)("dataLabels",e.doughnutChartOptions.dataLabels)("plotOptions",e.doughnutChartOptions.plotOptions)("legend",e.doughnutChartOptions.legend)("colors",e.doughnutChartOptions.colors)("tooltip",e.doughnutChartOptions.tooltip),i(4),r("highlight",e.codeForPieChart),i(5),r("highlightAuto",e.codeForPieChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var J=`  <apx-chart [series]="gredientChartOptions.series" [chart]="gredientChartOptions.chart"
      [stroke]="gredientChartOptions.stroke" [xaxis]="gredientChartOptions.xaxis" [fill]="gredientChartOptions.fill"
      [markers]="gredientChartOptions.markers" [yaxis]="gredientChartOptions.yaxis"
      [plotOptions]="gredientChartOptions.plotOptions" [tooltip]="gredientChartOptions.tooltip"
      [grid]="gredientChartOptions.grid">
    </apx-chart>
`;var U=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title Gredient Chart */
     */
    @Component({
        selector: 'app-gredient',
        imports: [NgApexchartsModule, MaterialModule,
          Highlight,
          HighlightAuto,
          HighlightLineNumbers,
          AppCodeViewComponent,
        ],
        templateUrl: './gredient.component.html'
    })
    export class AppGredientChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public gredientChartOptions: Partial<ChartOptions> | any;

        constructor() {
          //Column chart.
          this.gredientChartOptions = {
            series: [
              {
                name: 'Likes',
                data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
              },
            ],
            chart: {
              height: 350,
              type: 'line',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              foreColor: '#adb0bb',
              toolbar: {
                show: false,
              },
              dropShadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.2)',
                top: 12,
                left: 4,
                blur: 3,
                opacity: 0.4,
              },
            },
            stroke: {
              width: 7,
              curve: 'smooth',
            },

            xaxis: {
              type: 'datetime',
              categories: [
                '1/11/2000',
                '2/11/2000',
                '3/11/2000',
                '4/11/2000',
                '5/11/2000',
                '6/11/2000',
                '7/11/2000',
                '8/11/2000',
                '9/11/2000',
                '10/11/2000',
                '11/11/2000',
                '12/11/2000',
                '1/11/2001',
                '2/11/2001',
                '3/11/2001',
                '4/11/2001',
                '5/11/2001',
                '6/11/2001',
              ],
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                gradientToColors: ['#5D87FF'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 0.9,
                stops: [0, 100, 100, 100],
              },
            },
            markers: {
              size: 4,
              opacity: 0.9,
              colors: ['#5D87FF'],
              strokeColor: '#fff',
              strokeWidth: 2,

              hover: {
                size: 7,
              },
            },
            yaxis: {
              min: 0,
              max: 40,
            },
            tooltip: {
              theme: 'dark',
            },
            grid: {
              show: false,
            },
          };
        }
            
    }
`;var re=["chart"],z=(()=>{class s{constructor(){this.codeForGredientChart=J,this.codeForGredientChartTs=U,this.chart=Object.create(null),this.gredientChartOptions={series:[{name:"Likes",data:[4,3,10,9,35,19,22,9,12,7,19,5,13,9,17,2,7,5]}],chart:{height:350,type:"line",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1},dropShadow:{enabled:!0,color:"rgba(0,0,0,0.2)",top:12,left:4,blur:3,opacity:.4}},stroke:{width:7,curve:"smooth"},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#5D87FF"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:.9,stops:[0,100,100,100]}},markers:{size:4,opacity:.9,colors:["#5D87FF"],strokeColor:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:0,max:40},tooltip:{theme:"dark"},grid:{show:!1}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-gredient"]],viewQuery:function(t,e){if(t&1&&x(re,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:16,vars:16,consts:[[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","stroke","xaxis","fill","markers","yaxis","plotOptions","tooltip","grid"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"app-code-view",0)(1,"h4",1),a(2),m(3,"translate"),n(),o(4,"div",2),p(5,"apx-chart",3),n(),o(6,"div",4)(7,"pre"),a(8,"      "),p(9,"code",5),a(10,`
    `),n()(),o(11,"div",6)(12,"pre"),a(13,"      "),p(14,"code",7),a(15,`
    `),n()()()),t&2&&(r("isTitle",!0),i(2),d(" ",c(3,14,"CHARTS.types.gradient")," "),i(3),r("series",e.gredientChartOptions.series)("chart",e.gredientChartOptions.chart)("stroke",e.gredientChartOptions.stroke)("xaxis",e.gredientChartOptions.xaxis)("fill",e.gredientChartOptions.fill)("markers",e.gredientChartOptions.markers)("yaxis",e.gredientChartOptions.yaxis)("plotOptions",e.gredientChartOptions.plotOptions)("tooltip",e.gredientChartOptions.tooltip)("grid",e.gredientChartOptions.grid),i(4),r("highlight",e.codeForGredientChart),i(5),r("highlightAuto",e.codeForGredientChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var X=`  <apx-chart [series]="lineChartOptions.series" [chart]="lineChartOptions.chart" [xaxis]="lineChartOptions.xaxis"
      [yaxis]="lineChartOptions.yaxis" [grid]="lineChartOptions.grid" [stroke]="lineChartOptions.stroke"
      [tooltip]="lineChartOptions.tooltip" [dataLabels]="lineChartOptions.dataLabels" [legend]="lineChartOptions.legend"
      [colors]="lineChartOptions.colors" [markers]="lineChartOptions.markers">
    </apx-chart>
`;var Y=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title Basic Line Chart */
     */
    @Component({
        selector: 'app-line',
        imports: [NgApexchartsModule, MaterialModule,
            Highlight,
            HighlightAuto,
            HighlightLineNumbers,
            AppCodeViewComponent,
        ],
        templateUrl: './line.component.html'
    })
    export class AppLineChartComponent {
        constructor() {}

        @ViewChild('chart') chart: ChartComponent = Object.create(null);
          public lineChartOptions: Partial<ChartOptions> | any;
        
          constructor() {
            // Line chart.
            this.lineChartOptions = {
              series: [
                {
                  name: 'Site A',
                  data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                },
                {
                  name: 'Site B',
                  data: [1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3],
                },
              ],
              chart: {
                height: 300,
                type: 'line',
                fontFamily: 'DM Sans,sans-serif',
                foreColor: '#a1aab2',
                toolbar: {
                  show: false,
                },
              },
              dataLabels: {
                enabled: false,
              },
              markers: {
                size: 3,
                strokeColors: 'transparent',
              },
              stroke: {
                curve: 'straight',
                width: '2',
              },
              colors: ['#06d79c', '#398bf7'],
              legend: {
                show: false,
              },
              grid: {
                show: true,
                strokeDashArray: 0,
                borderColor: 'rgba(0,0,0,0.1)',
              },
              xaxis: {
                type: 'category',
                categories: [
                  '0',
                  '2',
                  '4',
                  '6',
                  '8',
                  '10',
                  '12',
                  '14',
                  '16',
                  '18',
                  '20',
                  '22',
                  '24',
                  '26',
                  '28',
                  '30',
                  '32',
                ],
              },
              tooltip: {
                theme: 'dark',
              },
            };
          }
            
    }
`;var oe=["chart"],j=(()=>{class s{constructor(){this.codeForLineChart=X,this.codeForLineChartTs=Y,this.chart=Object.create(null),this.lineChartOptions={series:[{name:"Site A",data:[5,6,3,7,9,10,14,12,11,9,8,7,10,6,12,10,8]},{name:"Site B",data:[1,2,8,3,4,5,7,6,5,6,4,3,3,12,5,6,3]}],chart:{height:300,type:"line",fontFamily:"DM Sans,sans-serif",foreColor:"#a1aab2",toolbar:{show:!1}},dataLabels:{enabled:!1},markers:{size:3,strokeColors:"transparent"},stroke:{curve:"straight",width:"2"},colors:["#06d79c","#398bf7"],legend:{show:!1},grid:{show:!0,strokeDashArray:0,borderColor:"rgba(0,0,0,0.1)"},xaxis:{type:"category",categories:["0","2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32"]},tooltip:{theme:"dark"}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-line"]],viewQuery:function(t,e){if(t&1&&x(oe,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:16,vars:17,consts:[[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","xaxis","yaxis","grid","stroke","tooltip","dataLabels","legend","colors","markers"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"app-code-view",0)(1,"h4",1),a(2),m(3,"translate"),n(),o(4,"div",2),p(5,"apx-chart",3),n(),o(6,"div",4)(7,"pre"),a(8,"      "),p(9,"code",5),a(10,`
    `),n()(),o(11,"div",6)(12,"pre"),a(13,"      "),p(14,"code",7),a(15,`
    `),n()()()),t&2&&(r("isTitle",!0),i(2),d(" ",c(3,15,"CHARTS.types.line")," "),i(3),r("series",e.lineChartOptions.series)("chart",e.lineChartOptions.chart)("xaxis",e.lineChartOptions.xaxis)("yaxis",e.lineChartOptions.yaxis)("grid",e.lineChartOptions.grid)("stroke",e.lineChartOptions.stroke)("tooltip",e.lineChartOptions.tooltip)("dataLabels",e.lineChartOptions.dataLabels)("legend",e.lineChartOptions.legend)("colors",e.lineChartOptions.colors)("markers",e.lineChartOptions.markers),i(4),r("highlight",e.codeForLineChart),i(5),r("highlightAuto",e.codeForLineChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var q=`  <apx-chart [series]="radialbarChartOptions.series" [chart]="radialbarChartOptions.chart"
          [dataLabels]="radialbarChartOptions.dataLabels" [plotOptions]="radialbarChartOptions.plotOptions"
          [legend]="radialbarChartOptions.legend" [colors]="radialbarChartOptions.colors"
          [tooltip]="radialbarChartOptions.tooltip">
        </apx-chart>
`,K=`  <apx-chart [series]="radarChartOptions.series" [chart]="radarChartOptions.chart"
          [dataLabels]="radarChartOptions.dataLabels" [plotOptions]="radarChartOptions.plotOptions"
          [legend]="radarChartOptions.legend" [colors]="radarChartOptions.colors" [tooltip]="radarChartOptions.tooltip">
        </apx-chart>
`;var W=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title Radialbar Chart */
     */
    @Component({
        selector: 'app-radial-radar',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './radial-radar.component.html'
    })
    export class AppRadialRadarChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public radialbarChartOptions: Partial<ChartOptions> | any;

      constructor() {
        this.radialbarChartOptions = {
          series: [44, 55, 67, 83],
          chart: {
            id: 'radial-chart',
            type: 'radialBar',
            height: 350,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            foreColor: '#adb0bb',
            toolbar: {
              show: false,
            },
          },
          colors: ['#5D87FF', '#49BEFF', '#13DEB9', '#FFAE1F'],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter() {
                    return 249;
                  },
                },
              },
            },
          },
          tooltip: {
            theme: 'dark',
          },
        };    
      }
`,Z=`  import { Component, ViewChild } from '@angular/core';
    import { AppCodeViewComponent } from '../../../../components/code-view/code-view.component';

    import {
      ApexAxisChartSeries,
      ApexChart,
      ChartComponent,
      ApexDataLabels,
      ApexYAxis,
      ApexLegend,
      ApexXAxis,
      ApexTooltip,
      ApexTheme,
      ApexGrid,
      ApexPlotOptions,
      ApexFill,
      NgApexchartsModule,
    } from 'ng-apexcharts';
    import { MaterialModule } from '../../../material.module';
    
    export type ChartOptions = {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      yaxis: ApexYAxis;
      stroke: any;
      theme: ApexTheme;
      tooltip: ApexTooltip;
      dataLabels: ApexDataLabels;
      legend: ApexLegend;
      colors: string[];
      markers: any;
      grid: ApexGrid;
      plotOptions: ApexPlotOptions;
      fill: ApexFill;
      labels: string[];
    };

    /**
     * @title Radar Chart */
     */
    @Component({
        selector: 'app-radial-radar',
        imports: [NgApexchartsModule, MaterialModule],
        templateUrl: './radial-radar.component.html'
    })
    export class AppRadialRadarChartComponent {

      @ViewChild('chart') chart: ChartComponent = Object.create(null);
      public radarChartOptions: Partial<ChartOptions> | any;

      constructor() {
        this.radarChartOptions = {
          series: [
            {
              name: 'Sales',
              data: [80, 50, 30, 40, 100, 20],
            },
          ],
          chart: {
            id: 'pie-chart',
            type: 'radar',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            toolbar: {
              show: false,
            },
          },
          colors: ['#5D87FF'],
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          tooltip: {
            theme: 'dark',
          },
        };
      }
`;var ne=["chart"],$=(()=>{class s{constructor(){this.codeForRadialbarChart=q,this.codeForRadialbarChartTs=W,this.codeForRadarChart=K,this.codeForRadarChartTs=Z,this.chart=Object.create(null),this.radialbarChartOptions={series:[44,55,67,83],chart:{id:"radial-chart",type:"radialBar",height:350,fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1}},colors:["#5D87FF","#49BEFF","#13DEB9","#FFAE1F"],plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter(){return 249}}}}},tooltip:{theme:"dark"}},this.radarChartOptions={series:[{name:"Sales",data:[80,50,30,40,100,20]}],chart:{id:"pie-chart",type:"radar",fontFamily:"'Plus Jakarta Sans', sans-serif",toolbar:{show:!1}},colors:["#5D87FF"],labels:["January","February","March","April","May","June"],tooltip:{theme:"dark"}}}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=C({type:s,selectors:[["app-radial-radar"]],viewQuery:function(t,e){if(t&1&&x(ne,5),t&2){let h;u(h=A())&&(e.chart=h.first)}},decls:35,vars:26,consts:[[1,"row"],[1,"col-lg-6"],[3,"isTitle"],["Ctitle",""],["output",""],[3,"series","chart","dataLabels","plotOptions","legend","colors","tooltip"],["htmlView",""],["language","html","lineNumbers","",3,"highlight"],["tsView",""],["language","ts","lineNumbers","",3,"highlightAuto"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"app-code-view",2)(3,"h4",3),a(4),m(5,"translate"),n(),o(6,"div",4),p(7,"apx-chart",5),n(),o(8,"div",6)(9,"pre"),a(10,"          "),p(11,"code",7),a(12,`
        `),n()(),o(13,"div",8)(14,"pre"),a(15,"          "),p(16,"code",9),a(17,`
        `),n()()()(),o(18,"div",1)(19,"app-code-view",2)(20,"h4",3),a(21),m(22,"translate"),n(),o(23,"div",4),p(24,"apx-chart",5),n(),o(25,"div",6)(26,"pre"),a(27,"          "),p(28,"code",7),a(29,`
        `),n()(),o(30,"div",8)(31,"pre"),a(32,"          "),p(33,"code",9),a(34,`
        `),n()()()()()),t&2&&(i(2),r("isTitle",!0),i(2),d(" ",c(5,22,"CHARTS.types.radialbarTitle")," "),i(3),r("series",e.radialbarChartOptions.series)("chart",e.radialbarChartOptions.chart)("dataLabels",e.radialbarChartOptions.dataLabels)("plotOptions",e.radialbarChartOptions.plotOptions)("legend",e.radialbarChartOptions.legend)("colors",e.radialbarChartOptions.colors)("tooltip",e.radialbarChartOptions.tooltip),i(4),r("highlight",e.codeForRadialbarChart),i(5),r("highlightAuto",e.codeForRadialbarChartTs),i(3),r("isTitle",!0),i(2),d(" ",c(22,24,"CHARTS.types.radarTitle")," "),i(3),r("series",e.radarChartOptions.series)("chart",e.radarChartOptions.chart)("dataLabels",e.radarChartOptions.dataLabels)("plotOptions",e.radarChartOptions.plotOptions)("legend",e.radarChartOptions.legend)("colors",e.radarChartOptions.colors)("tooltip",e.radarChartOptions.tooltip),i(4),r("highlight",e.codeForRadarChart),i(5),r("highlightAuto",e.codeForRadarChartTs))},dependencies:[O,f,y,b,T,D,w,g],encapsulation:2})}}return s})();var Lt=[{path:"",children:[{path:"area",component:_,data:{title:"Area Chart",urls:[{title:"Home",url:""},{title:"Area Chart"}]}},{path:"candlestick",component:E,data:{title:"Candlestick",urls:[{title:"Home",url:""},{title:"Candlestick"}]}},{path:"column",component:R,data:{title:"Column Chart",urls:[{title:"Home",url:""},{title:"Column Chart"}]}},{path:"doughnut-pie",component:Q,data:{title:"Doughnut-Pie Chart",urls:[{title:"Home",url:""},{title:"Doughnut-Pie Chart"}]}},{path:"gredient",component:z,data:{title:"Gredient Chart",urls:[{title:"Home",url:""},{title:"Gredient Chart"}]}},{path:"line",component:j,data:{title:"Line Chart",urls:[{title:"Home",url:""},{title:"Line Chart"}]}},{path:"radial-radar",component:$,data:{title:"Radial-Radar Chart",urls:[{title:"Home",url:""},{title:"Radial-Radar Chart"}]}}]}];export{Lt as ChartsRoutes};
