import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title_time_series = {
    text: 'Tourists from Asia (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16
    }
  };
  
  chart_bar = {
    type: 'bar',
    height: 450,
    width: 600,
    fontFamily: 'Nunito'
  };
  
  /** tourists in asia */
  
  series_time_series = [
    {
      name: 'Tourists',
      data: [9731819, 12105104, 14417552, 17889203, 16440900, 22028956, 23934438]
    }
  ];
  
  xaxis_time_series = {
    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    title: {
      text: 'Years',
      style: {
        fontSize: 16
      }
    }
  };
  
  formatter = value => {
    const val = Math.abs(value);
    if (val >= 1000000) {
      return (val / 1000000).toFixed(1) + ' M';
    }
    return value;
  };
  
  yaxis_time_series = {
    title: {
      text: 'Number of Tourists',
      style: {
        fontSize: 14
      }
    },
    labels: {
      formatter: this.formatter
    }
  };
  
  /** trend - time-series */
  
  chart_line = {
    type: 'line',
    height: 350,
    width: 500,
    fontFamily: 'Nunito'
  };
  
  /** Europe trend */
  
  colors_line_europe = ['#39E6A5'];
  
  title_time_series_europe = {
    text: 'Tourists from Europe (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16
    }
  };
  
  series_time_series_europe = [
    {
      name: 'Tourists',
      data: [4442375, 5101406, 5650619, 6305945, 6161893, 5759997, 6170481]
    }
  ];
  
  /** America trend */
  
  colors_line_america = ['#FEBC45'];
  
  title_time_series_america = {
    text: 'Tourists from Americas (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16
    }
  };
  
  series_time_series_america = [
    {
      name: 'Tourists',
      data: [844644, 952519, 1083433, 1166633, 1099709, 1261091, 1405611]
    }
  ];
  
  /** part-to-whole | tourists in all region */
  
  title_pie = {
    text: 'Tourists from Overseas (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16
    }
  };
  
  chart_pie = {
    width: 450,
    type: 'pie',
    fontFamily: 'Nunito'
  };
  
  labels_region = ['Asia', 'Europe', 'Americas', 'Oceania', 'Africa'];
  
  responsive = [
    {
      breakpoint: 500,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom',
          style: {
            fontSize: 10
          }
        }
      }
    }
  ];
  
  series_pie = [116547972, 39592716, 7813640, 6565119, 1083600];
  
  /** deviation */
  
  title_devi = {
    text:
      'Difference of Tourists in China and Hongkong Compared to Japan (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16
    }
  };
  
  chart_devi = {
    height: 500,
    width: 650,
    fontFamily: 'Nunito'
  };
  
  dataLabels = {
    enabled: false
  };
  
  series_devi = [
    {
      name: 'China',
      type: 'column',
      data: [12.9, 52.61, 102.87, 201.83, 265.67, 484.37, 508.31]
    },
    {
      name: 'Hong Kong',
      type: 'column',
      data: [-68.15, -63.49, -65.52, -61.71, -61.89, -50.67, -47.92]
    },
    {
      name: 'Reference',
      type: 'line',
      data: [0, 0, 0, 0, 0, 0, 0]
    }
  ];
  
  yaxis_devi = {
    title: {
      text: 'Difference of Tourists (%)'
    },
    style: {
      fontSize: 14
    }
  };
  
  xaxis_devi = {
    title: {
      text: 'Years'
    },
    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    style: {
      fontSize: 14
    }
  };
  
  legend_devi = {
    onItemHover: {
      highlightDataSeries: true
    },
    position: 'top',
    offsetX: 0,
    offsetY: 0
  };
  
  /** distribution */
  
  chart_distri = {
    height: 500,
    width: 650,
    fontFamily: 'Nunito',
    type: 'candlestick'
  };

  series_distri = [
    {
      data: [
        {
          x: 'JAN',
          y: [4395000, 19550232, 2566080, 11008728]
        },
        {
          x: 'FEB',
          y: [4102860, 22996896, 3665208, 14945892]
        },
        {
          x: 'MAR',
          y: [4164036, 20560224, 1782408, 12437352]
        },
        {
          x: 'APR',
          y: [4232772, 19584672, 1268616, 13547388]
        },
        {
          x: 'MAY',
          y: [3929604, 17725680, 859992, 12616452]
        },
        {
          x: 'JUN',
          y: [3661032, 17169912, 1178640, 12035436]
        },
        {
          x: 'JUL',
          y: [5309856, 20768520, 2165352, 14814144]
        },
        {
          x: 'AUG',
          y: [5664756, 21393168, 2966184, 15328332]
        },
        {
          x: 'SEP',
          y: [4618380, 15813456, 2414904, 12256392]
        },
        {
          x: 'OCT',
          y: [4938240, 13587936, 2379144, 11700012]
        },
        {
          x: 'NOV',
          y: [4877856, 14769768, 1623624, 11343864]
        },
        {
          x: 'DEC',
          y: [4684860, 15308592, 2541552, 12370644]
        }
      ]
    }
  ];
  
  plotOptions = {
    candlestick: {
      colors: {
        upward: '#39E6A5',
        downward: '#39E6A5'
      }
    }
  };
  
  title_distri = {
    text: 'Tourists from China for Each Months Distribution',
    align: 'center',
    style: {
      fontSize: 14
    }
  };
  
  xaxis_distri = {
    title: {
      text: 'Months',
      style: {
        fontSize: 14
      }
    }
  };
  
  yaxis_distri = {
    tooltip: {
      enabled: true
    },
    title: {
      text: 'Number of Tourists',
      style: {
        fontSize: 14
      }
    },
    labels: {
      formatter: this.formatter
    }
  };

  /** distri-europe */

  chart_est_asia = {
    height: 500,
    width: 500,
    type: 'bar',
    events: {
        click: (chart: any, w: any, e: any) => {
            console.log(chart, w, e );
        }
    },
    fontFamily: 'Nunito'
  };

  title_est_asia = {
    text: 'Tourists from East Asia Countries Distribution',
    align: 'center',
    style: {
      fontSize: 14
    }
  };

  colors_est_asia = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

  plotOptions_est_asia = {
    bar: {
        columnWidth: '45%',
        distributed: true
    }
  };

  dataLabels_est_asia = {
    enabled: false,
  };

  series_est_asia = [{
    name: ['Tourists'],
    data: [31630027, 3695757, 9102856, 8245240, 3185941]
  }];

  series_est_asia_normalize = [{
    name: ['Tourists (%)'],
    data: [0.02, 0.49 ,0.07 ,0.16 ,0.14]
  }]

  xaxis_est_asia = {
    categories: ['China', 'Hong Kong', 'Japan', 'Korea', 'Taiwan'],
    labels: {
        style: {
            colors: this.colors_est_asia,
            fontSize: '14px'
        }
    },
    title: {
      text: 'Countries'
    }
  };

  yaxis_est_asia = {
    tooltip: {
      enabled: true
    },
    title: {
      text: 'Number of Tourists',
      style: {
        fontSize: 14
      }
    },
    labels: {
      formatter: this.formatter
    }
  };

  yaxis_est_asia_normalize = {
    tooltip: {
      enabled: true
    },
    title: {
      text: 'Number of Tourists',
      style: {
        fontSize: 14
      }
    }
  };
  
  /** correlation */

  chart_corre = {
    height: 350,
    width: 500,
    type: 'scatter',
    zoom: {
        enabled: true,
        type: 'xy'
    }
  };

  series_corre = [{
      name: "SAMPLE A",
      data: [
      [31630027, 2244], [3695757, 1557], [9102856, 4312], [8245240, 3585]]
  },{
      name: "SAMPLE B",
      data: [
      [4239594, 9390], [4973294, 8672], [1494968, 8705], [2425967, 8055]]
  }];

  xaxis_corre = {
      tickAmount: 10,
      labels: {
          formatter: function(val) {
              return parseFloat(val).toFixed(1)
          }
      }
  }; 

  yaxis_corre = {
      tickAmount: 7
  };


  /** geo */
  
  chart = {
    title: 'GeoChart',
    type: 'GeoChart',
    columnNames: ['Country', 'Tourists'],
    data: [
      ['Brunei', 78262],
      ['Cambodia', 3086608],
      ['Indonesia', 3205735],
      ['Laos', 7251380],
      ['Malaysia', 19739900],
      ['Myanmar', 1314652],
      ['Philippines', 2083269],
      ['Singapore', 5824416],
      ['Singapore', 4370304],
      ['Philippines', 700],
      ['China', 31630027],
      ['Hong Kong', 3695757],
      ['Japan', 9102856],
      ['Korea', 8245240],
      ['Taiwan', 3185941],
      ['Egypt', 162446],
      ['Israel', 936927],
      ['Kuwait', 416879],
      ['Saudi Arabia', 114888],
      ['UAE', 823859],
      ['Bangladesh', 584383],
      ['India', 6935485],
      ['Nepal', 207438],
      ['Pakistan', 519091],
      ['SriLanka', 473850]
    ],
    roles: [],
    options: {
      region: '142',
      colorAxis: {
        colors: ['#cd2626', '#fff1dd', '#39E6A5']
      },
      backgroundColor: '#c6e2ff'
    },
    legend: {
      fontName: 'Nunito'
    }
  };
  
  

};