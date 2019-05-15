import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title_time_series = {
    text: 'Tourists from Asia Arriving in Thailand (2010-2016)',
    align: 'center',
    style: {
      fontSize: 18
    }
  };
  
  chart_bar = {
    type: 'bar',
    height: 450,
    width: 600,
    fontFamily: 'Nunito'
  };
  
  colors_bar = ['#FF4560'];
  
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
      text: 'Year',
      style: {
        fontSize: 14
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
    text: 'Tourists from Europe Arriving in Thailand (2010-2016)',
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
    text: 'Tourists from Americas Arriving in Thailand (2010-2016)',
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
    text: 'Tourists from Overseas Arriving in Thailand (2010-2016)',
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
  
  dataLabels_pie = {
    enabled: true
  };
  
  legend_pie = {
    position: 'right',
    offsetY: 25
  };
  
  legend_pie_asia = {
    position: 'bottom',
    offsetY: 0
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
  
  /** part-to-whole - country */
  
  title_pie_country = {
    text: 'Tourists from East-Asia Arriving in Thailand (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16
    }
  };
  
  chart_pie_country = {
    width: 440,
    type: 'pie',
    fontFamily: 'Nunito'
  };
  
  colors_pie_country = [
    '#FF4560',
    '#00E396',
    '#FEB019',
    '#008FFB',
    '#775DD0',
    '#4a2d27'
  ];
  
  labels_country = ['China', 'Japan', 'Korea', 'Hong Kong', 'Taiwan', 'Others'];
  
  series_pie_country = [31630027, 9102856, 8245240, 3695757, 3185941, 389177];
  
  /** deviation */
  
  title_devi = {
    text:
      'Difference of Tourists in China and Hong Kong Compared to Japan (2010-2016)',
    align: 'center',
    style: {
      fontSize: 18
    }
  };
  
  chart_devi = {
    height: 500,
    width: 750,
    fontFamily: 'Nunito'
  };
  
  dataLabels = {
    enabled: true
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
      text: 'Difference of Tourists (%)',
      style: {
        fontSize: 14
      }
    }
  };
  
  xaxis_devi = {
    title: {
      text: 'Year',
      style: {
        fontSize: 14
      }
    },
    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016]
  };
  
  legend_devi = {
    onItemHover: {
      highlightDataSeries: true
    },
    position: 'top',
    offsetX: 0,
    offsetY: 0
  };
  
  colors_devi = ['#FF4560', '#008FFB', '#f6ed95'];
  
  /** distribution */
  
  chart_distri = {
    height: 450,
    width: 600,
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
        upward: '#FF4560',
        downward: '#FF4560'
      }
    }
  };
  
  title_distri = {
    text:
      'Distribution of Tourists from China Arriving in Thailand for Each Month',
    align: 'center',
    style: {
      fontSize: 14
    }
  };
  
  subtitle_distri = {
    text: '(2010-2016)',
    align: 'center',
    style: {
      fontSize: 14
    }
  };
  
  xaxis_distri = {
    title: {
      text: 'Month',
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
        console.log(chart, w, e);
      }
    },
    fontFamily: 'Nunito'
  };
  
  title_est_asia = {
    text: 'Distribution of Tourists from East-Asian Countries (2010-2016)',
    align: 'center',
    style: {
      fontSize: 14
    }
  };
  
  colors_est_asia = ['#FF4560', '#00E396', '#FEB019', '#008FFB', '#775DD0'];
  
  plotOptions_est_asia = {
    bar: {
      columnWidth: '45%',
      distributed: true
    }
  };
  
  dataLabels_est_asia = {
    enabled: false
  };
  
  series_est_asia = [
    {
      name: ['Tourists'],
      data: [31630027, 9102856, 8245240, 3695757, 3185941]
    }
  ];
  
  subtitle_est_asia = {
    text: '(Actual)',
    align: 'center',
    style: {
      fontSize: 14
    }
  };
  
  subtitle_est_asia_normalize = {
    text: '(Proportion)',
    align: 'center',
    style: {
      fontSize: 14
    }
  };
  
  xaxis_est_asia = {
    categories: ['China', 'Japan', 'Korea', 'Hong Kong', 'Taiwan'],
    labels: {
      style: {
        colors: this.colors_est_asia,
        fontSize: '12px'
      }
    },
    title: {
      text: 'Country',
      style: {
        fontSize: '14px'
      }
    }
  };
  
  colors_est_asia_normalize = [
    '#008FFB',
    '#FEB019',
    '#775DD0',
    '#00E396',
    '#FF4560'
  ];
  
  xaxis_est_asia_normalize = {
    categories: ['Hong Kong', 'Korea', 'Taiwan', 'Japan', 'China'],
    labels: {
      style: {
        colors: this.colors_est_asia_normalize,
        fontSize: '12px'
      }
    },
    title: {
      text: 'Country',
      style: {
        fontSize: '14px'
      }
    }
  };
  
  series_est_asia_normalize = [
    {
      name: ['Tourists (%)'],
      data: [0.49, 0.16, 0.13, 0.07, 0.02]
    }
  ];
  
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
    width: 800,
    type: 'scatter',
    zoom: {
      enabled: true,
      type: 'xy'
    },
    fontFamily: 'Nunito',
    style: {
      fontSize: 16
    }
  };
  
  series_corre = [
    {
      name: 'ASIA',
      data: [
        [2325.6, 584383],
        [5299.4, 78262],
        [781.6, 3086608],
        [7281, 389177],
        [1557, 162446],
        [4215.1, 3695757],
        [4952.9, 6935485],
        [6854, 3205735],
        [4312, 936927],
        [3585, 9102856],
        [5593, 8245240],
        [471, 416879],
        [1700.3, 7251380],
        [2221, 1935010],
        [3596, 1314652],
        [2261, 207438],
        [5875, 519091],
        [2109, 2083269],
        [6272.9, 234192],
        [2259, 114888],
        [4846, 5824416],
        [1105.9, 473850]
      ]
    },
    {
      name: 'EUROPE',
      data: [
        [8445, 680478],
        [9097, 677112],
        [8631, 1137578],
        [7680, 1015093],
        [9390, 4239594],
        [8672, 4973294],
        [8705, 1494968],
        [8996, 1495853],
        [8608, 986443],
        [5085, 8376029],
        [10057, 834734],
        [8055, 2425967],
        [8929, 1339108],
        [9435, 6307191]
      ]
    }
  ];
  
  xaxis_corre = {
    tickAmount: 7,
    labels: {
      formatter: (val: string) => {
        return parseFloat(val).toFixed(0);
      }
    },
    title: {
      text: 'Distance (KM)',
      style: {
        fontSize: 14
      }
    }
  };
  
  legend_corre = {
    position: 'top',
    offsetY: 0
  };
  
  yaxis_corre = {
    tickAmount: 5,
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
  
  /** geo */
  
  chart = {
    title: '',
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
        colors: ['#39E6A5', '#fff1dd', '#FF4560']
      },
      tooltip: {
        textStyle: {
          fontName: 'Nunito'
        }
      },
      legend: {
        textStyle: {
          fontName: 'Nunito'
        }
      },
      backgroundColor: '#c6e2ff'
    }
  };
  
  
  

};