// ==================================================================
// beginning of nine letter bubble chart
// ==================================================================

var ctx = document.getElementById('bubble-nine').getContext('2d');

var myChart = new Chart(ctx, {
//data array [2425, 2643, 2730, 2766, 2801, 3639, 4152, 4259, 4303, 4303,]
  type: 'bubble',
  data: {
    labels: ['', 'carefully', 'important', 'sometimes', 'surprised', 'attention', 'shoulders', 'whispered', 'different', 'continued', 'something', ''],
    datasets: [{
      data: [{
        "x": 1800,
        "y": 0,
        "r": 0
      }, {
        "x": 2425,
        "y": 2,
        "r": 28
      }, {
        "x": 2643,
        "y": 4,
        "r": 30
      }, {
        "x": 2730,
        "y": 16,
        "r": 32
      }, {
        "x": 2766,
        "y": 50,
        "r": 35
      }, {
        "x": 2801,
        "y": 100,
        "r": 30
      }, {
        "x": 3639,
        "y": 200,
        "r": 31
      }, {
        "x": 4152,
        "y": 400,
        "r": 31
      }, {
        "x": 4259,
        "y": 1024,
        "r": 34
      }, {
        "x": 4303,
        "y": 2400,
        "r": 35
      }, , {
        "x": 4303,
        "y": 2400,
        "r": 35
      }, {
        "x": 5000,
        "y": 5000,
        "r": 0
      }],

      backgroundColor: [
        'rgba(53,255,105, 0.5)',
        'rgba(68,204,255, 0.5)',
        'rgba(116,148,234, 0.5)',
        'rgba(209,56,191, 0.5)',
        'rgba(245,183,0, 0.5)',
        'rgba(137,4,61, 0.5)',
        'rgba(47,230,222, 0.5)',
        'rgba(255,166,48, 0.5)',
        'rgba(12,15,10, 0.5)',
        'rgba(166,52,70, 0.5)'
      ]
    }, ],
  },
  options: {
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        type: 'logarithmic',
        display: false
      }],
    },
    plugins: {
      datalabels: {
        align: 'center',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      colorschemes: {
        scheme: 'office.VioletII6'
      }
    }
  }
});

// ==================================================================
// beginning of eight letter bubble chart
// ==================================================================

var ctx = document.getElementById('bubble-eight').getContext('2d');

var myChart = new Chart(ctx, {
//data array [4713, 4753, 4822, 5110, 5290, 5456, 5694, 5821, 6520, 8886]
  type: 'bubble',
  data: {
    labels: ['', 'darkness', 'remember', 'happened', 'followed', 'standing', 'shoulder', 'soldiers', 'together', 'suddenly', 'anything', ''],
    datasets: [{
      data: [{
        "x": 4000,
        "y": 0,
        "r": 0
      }, {
        "x": 4713,
        "y": 2,
        "r": 28
      }, {
        "x": 4753,
        "y": 4,
        "r": 30
      }, {
        "x": 4822,
        "y": 16,
        "r": 32
      }, {
        "x": 5110,
        "y": 32,
        "r": 35
      }, {
        "x": 5290,
        "y": 64,
        "r": 30
      }, {
        "x": 5456,
        "y": 128,
        "r": 31
      }, {
        "x": 5694,
        "y": 256,
        "r": 31
      }, {
        "x": 5821,
        "y": 512,
        "r": 34
      }, {
        "x": 6520,
        "y": 1024,
        "r": 35
      }, {
        "x": 8886,
        "y": 2056,
        "r": 70
      }, {
        "x": 9500,
        "y": 4096,
        "r": 0
      }],

      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5',
        'rgba(16, 126, 125, 0.5)',
        'rgba(189, 191, 9, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(52, 89, 149, 0.5)',
        'rgba(3, 206, 164, 0.5)',
        'rgba(251, 77, 61, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1',
        'rgba(16, 126, 125, 1)',
        'rgba(189, 191, 9, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(52, 89, 149, 1)',
        'rgba(3, 206, 164, 1)',
        'rgba(251, 77, 61, 1)'
      ],
      borderWidth: 1.5,
    }, ],
  },
  options: {
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        type: 'logarithmic',
        display: false
      }],
    },
    plugins: {
      datalabels: {
        align: 'center',
        offset: '30',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      colorschemes: {
        scheme: 'office.VioletII6'
      }
    }
  }
});

// ==================================================================
// beginning of seven letter bubble chart
// ==================================================================

var ctx = document.getElementById('bubble-seven').getContext('2d');

var myChart = new Chart(ctx, {
//data array = [9037, 10478, 10628, 10734, 14600, 14934, 14941, 18451, 25427, 2771]
  type: 'bubble',
  data: {
    labels: ['', 'herself', 'between', 'looking', 'without', 'nothing', 'another', 'against', 'himself', 'thought', 'through', ''],
    datasets: [{
      data: [{
        "x": 8000,
        "y": 0,
        "r": 0
      }, {
        "x": 9037,
        "y": 18,
        "r": 20
      }, {
        "x": 10478,
        "y": 36,
        "r": 20
      }, {
        "x": 10628,
        "y": 81,
        "r": 21
      }, {
        "x": 10734,
        "y": 144,
        "r": 22
      }, {
        "x": 14600,
        "y": 225,
        "r": 30
      }, {
        "x": 14934,
        "y": 324,
        "r": 31
      }, {
        "x": 14941,
        "y": 441,
        "r": 31
      }, {
        "x": 18451,
        "y": 576,
        "r": 37
      }, {
        "x": 25427,
        "y": 729,
        "r": 50
      }, {
        "x": 27717,
        "y": 900,
        "r": 55
      }, {
        "x": 29000,
        "y": 1300,
        "r": 0
      }],

      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5',
        'rgba(16, 126, 125, 0.5)',
        'rgba(189, 191, 9, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(52, 89, 149, 0.5)',
        'rgba(3, 206, 164, 0.5)',
        'rgba(251, 77, 61, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1',
        'rgba(16, 126, 125, 1)',
        'rgba(189, 191, 9, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(52, 89, 149, 1)',
        'rgba(3, 206, 164, 1)',
        'rgba(251, 77, 61, 1)'
      ],
      borderWidth: 1.5,
    }, ],
  },
  options: {
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        type: 'logarithmic',
        display: false
      }],
    },
    plugins: {
      datalabels: {
        align: 'center',
        offset: '30',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      colorschemes: {
        scheme: 'office.VioletII6'
      }
    }
  }
});

// ==================================================================
// beginning of six letter bubble chart
// ==================================================================
// data array = [16147, 16183, 17080, 18041, 18565, 18586, 20531, 21206, 25488, 31869]
var ctx = document.getElementById('bubble-six').getContext('2d');

var myChart = new Chart(ctx, {

  type: 'bubble',
  data: {
    labels: ['', 'moment', 'behind', 'enough', 'turned', 'little', 'though', 'around', 'seemed', 'looked', 'before', ''],
    datasets: [{
      data: [{
        "x": 15000,
        "y": 0,
        "r": 0
      }, {
        "x": 16147,
        "y": 6,
        "r": 18
      }, {
        "x": 16183,
        "y": 36,
        "r": 18
      }, {
        "x": 17080,
        "y": 81,
        "r": 19
      }, {
        "x": 18041,
        "y": 144,
        "r": 22
      }, {
        "x": 18565,
        "y": 225,
        "r": 23
      }, {
        "x": 18586,
        "y": 324,
        "r": 23.5
      }, {
        "x": 20531,
        "y": 441,
        "r": 25
      }, {
        "x": 21206,
        "y": 576,
        "r": 28.7
      }, {
        "x": 25488,
        "y": 729,
        "r": 34
      }, {
        "x": 31869,
        "y": 900,
        "r": 42
      }, {
        "x": 34000,
        "y": 1300,
        "r": 0
      }],

      backgroundColor: [
        'rgba(42,140,135, 0.5)',
        'rgba(44,133,135, 0.5)',
        'rgb(46,126,135), 0.5)',
        'rgb(48,119,136), 0.5)',
        'rgb(50,112,136), 0.5)',
        'rgb(52,105,136), 0.5)',
        'rgb(54,98,137), 0.5)',
        'rgb(57,91,137), 0.5)',
        'rgb(59,84,137), 0.5)',
        'rgb(63,70,138), 0.5)',
      ],
    }, ],
  },
  options: {
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        type: 'logarithmic',
        display: false
      }],
    },
    plugins: {
      datalabels: {
        align: 'center',
        offset: '30',
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      colorschemes: {
        scheme: 'office.VioletII6'
      }
    }
  }
});
