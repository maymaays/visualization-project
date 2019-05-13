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
      fontSize: 22,
    }
  };

  chart_bar = {
    type: 'bar',
    height: 600,
    width: 650,
    fontFamily: 'Nunito'
  };

  /** tourists in asia */

  series_time_series = [{
    name: 'Tourists',
    data: [9731819, 12105104, 14417552, 17889203, 16440900, 22028956, 23934438]
  }];

  xaxis_time_series = {
    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    title: {
      text: 'Years',
      style: {
        fontSize: 16,
      }
    }
  };



  formatter = (value) => {
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
        fontSize: 14,
      }
    },
    labels: {
      formatter: this.formatter
    }
  };

  /** trend - time-series */

  chart_line = {
    type: 'line',
    height: 270,
    width: 650,
    fontFamily: 'Nunito'
  };

  /** Europe trend */

  colors_line_europe = ['#39E6A5']; 

  title_time_series_europe = {
    text: 'Tourists from Europe (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16,
    }
  };

  series_time_series_europe = [{
    name: 'Tourists',
    data: [4442375, 5101406, 5650619, 6305945, 6161893, 5759997, 6170481]
  }];

  /** America trend */

  colors_line_america = ['#FEBC45'];

  title_time_series_america = {
    text: 'Tourists from America (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16,
    }
  };

  series_time_series_america = [{
    name: 'Tourists',
    data: [844644, 952519, 1083433, 1166633, 1099709, 1261091, 1405611]
  }];

  /** part-to-whole | tourists in all region */

  title_pie = {
    text: 'Tourists from Overseas (2010-2016)',
    align: 'center',
    style: {
      fontSize: 16,
    }
  };

  chart_pie = {
    width: 500,
    type: 'pie',
    fontFamily: 'Nunito'
  };
  
  labels_region = ['Asia', 'Europe', 'Americas', 'Oceania', 'Africa'];

  responsive = [{
    breakpoint: 700,
    options: {
      chart: {
        width: 1000
      },
      legend: {
        position: 'bottom',
        style: {
          fontSize: 14,
        }
      }
    }
  }];

  series_pie = [116547972, 39592716, 7813640, 6565119, 1083600];
  
  

  /** deviation */

  title_devi = {
    text: 'Difference of Tourists in China and Hongkong Compared to Japan (2010-2016)',
    align: 'center'
  };

  chart_devi = {
    height: 800,
    width: 800,
    fontFamily: 'Nunito'
  };


  dataLabels = {
      enabled: false,
  };

  series_devi = [{
    name: 'China',
    type: 'column',
    data: [12.9, 52.61, 102.87, 201.83,	265.67,	484.37,	508.31]
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
  },
];

 



  yaxis_devi = {
    title: {
        text: 'Difference of Tourists (%)',
    }
  };

  xaxis_devi = {
    title: {
      text: 'Years',
  },
    categories: [ 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  }

  legend_devi = {
    onItemHover: {
      highlightDataSeries: true
    },
    position: 'top',
    offsetX: 0,
    offsetY: 0,
  };

  /** distribution */
  /** correlation */
  /** geo */
};