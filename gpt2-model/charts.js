//Chart.plugins.unregister(ChartDataLabels);

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      ['Robert', ' Jordan'],
      ['Steven', ' Erikson'],
      ['George', ' R. R. Martin'],
      ['Brandon', 'Sanderson'],
      ['Stephen', 'King'],
      ['J. K.', 'Rowling'],
      ['Tad', 'Williams'],
      ['Stephen', 'R. Lawhead'],
      ['Patrick', 'Rothfuss'],
      ['J. R. R.', 'Tolkien'],
      ['Christopher', 'Paolini'],
      ['Joe', 'Abercrombie'],
      ['David', 'Eddings'],
      ['Scott', 'Bakker'],
      ['Gene', 'Wolfe'],
      ['Guy', 'Gavriel Kay'],
      ['Garth', 'Nix'],
      ['C. S.', 'Lewis'],
      ['Ursula', 'K Le Guin'],
      ['Fred', 'Saberhagen']
    ],
    datasets: [{
      datalabels: {
        display: false
      },
      label: '# of Votes',
      data: [4074024, 3263937, 1745214, 1384299, 1342947,
        1104023, 1073825, 936893, 653713, 636241, 629820,
        619176, 528051, 510086, 388113, 373211, 330083,
        319105, 242246, 173849
      ],

      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(52, 89, 149, 0.4)',
        'rgba(3, 206, 164, 0.4)',
        'rgba(251, 77, 61, 0.4)',
        'rgba(189, 191, 9, 0.4)',
        'rgba(202, 21, 81, 0.4)',
        'rgba(149, 25, 12, 0.4)',
        'rgba(97, 3, 69, 0.4)',
        'rgba(16, 126, 125, 0.4)',
        'rgba(189, 191, 9, 0.4)',
        'rgba(4, 75, 127, 0.4)',
        'rgba(17, 120, 147, 0.4)',
        'rgba(78, 196, 164, 0.4)',
        'rgba(209, 59, 63, 0.4)',
        'rgba(254, 175, 18, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(52, 89, 149, 1)',
        'rgba(3, 206, 164, 1)',
        'rgba(251, 77, 61, 1)',
        'rgba(189, 191, 9, 1)',
        'rgba(202, 21, 81, 1)',
        'rgba(149, 25, 12, 1)',
        'rgba(97, 3, 69, 1)',
        'rgba(16, 126, 125, 1)',
        'rgba(189, 191, 9, 1)',
        'rgba(4, 75, 127, 1)',
        'rgba(17, 120, 147, 1)',
        'rgba(78, 196, 164, 1)',
        'rgba(209, 59, 63, 1)',
        'rgba(254, 175, 18, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: [{
    plugins: {
      colorschemes: {
        scheme: 'office.VioletII6'
      }
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }]
});

new Chart(document.getElementById("booksize"), {
  type: "line",
  data: {
    labels: [
      ['Robert', ' Jordan'],
      ['Steven', ' Erikson'],
      ['George', ' R. R. Martin'],
      ['Brandon', 'Sanderson'],
      ['Stephen', 'King'],
      ['J. K.', 'Rowling'],
      ['Tad', 'Williams'],
      ['Stephen', 'R. Lawhead'],
      ['Patrick', 'Rothfuss'],
      ['J. R. R.', 'Tolkien'],
      ['Christopher', 'Paolini'],
      ['Joe', 'Abercrombie'],
      ['David', 'Eddings'],
      ['Scott', 'Bakker'],
      ['Gene', 'Wolfe'],
      ['Guy', 'Gavriel Kay'],
      ['Garth', 'Nix'],
      ['C. S.', 'Lewis'],
      ['Ursula', 'K Le Guin'],
      ['Fred', 'Saberhagen']
    ],
    datasets: [{
      datalabels: {
        display: false
      },
      label: "Average words per book",
      data: [291002, 326394, 394043, 276860, 167868, 157718, 268456, 156149, 326857, 127248, 209940, 206392,
        105610, 170029, 194057, 124404, 110028, 45586, 60562, 57950
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      lineTension: 0.4,
      yAxisID: 'perbook'
    },
    {
      datalabels: {
        display: false
      },
      label: "Total number of words",
      data: [4074024, 3263937, 1745214, 1384299, 1342947,
        1104023, 1073825, 936893, 653713, 636241, 629820,
        619176, 528051, 510086, 388113, 373211, 330083,
        319105, 242246, 173849],
      fill: false,
      borderColor: "rgb(255,127,80)",
      lineTension: 0.4,
      yAxisID: 'total'
    }
  ]
  },
  options: {
    scales: {
            yAxes: [{
                id: 'perbook',
                type: 'linear',
                position: 'left'
            }, {
                id: 'total',
                type: 'linear',
                position: 'right'
            }]
        }
  }
});

var COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];

var ctx = document.getElementById('ass').getContext('2d');

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
        "r": 27
      }, {
        "x": 16183,
        "y": 36,
        "r": 27
      }, {
        "x": 17080,
        "y": 81,
        "r": 28
      }, {
        "x": 18041,
        "y": 144,
        "r": 30
      }, {
        "x": 18565,
        "y": 225,
        "r": 31
      }, {
        "x": 18586,
        "y": 324,
        "r": 31
      }, {
        "x": 20531,
        "y": 441,
        "r": 34
      }, {
        "x": 21206,
        "y": 576,
        "r": 35
      }, {
        "x": 25488,
        "y": 729,
        "r": 42
      }, {
        "x": 31869,
        "y": 900,
        "r": 53
      }, {
        "x": 34000,
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

var ctx = document.getElementById('bubble2').getContext('2d');

var myChart = new Chart(ctx, {

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

var ctx = document.getElementById('bubble3').getContext('2d');

var myChart = new Chart(ctx, {

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
        "y": 0,
        "r": 20
      }, {
        "x": 2643,
        "y": 2,
        "r": 28
      }, {
        "x": 2730,
        "y": 4,
        "r": 30
      }, {
        "x": 2766,
        "y": 16,
        "r": 32
      }, {
        "x": 2801,
        "y": 32,
        "r": 35
      }, {
        "x": 3639,
        "y": 64,
        "r": 30
      }, {
        "x": 4152,
        "y": 128,
        "r": 31
      }, {
        "x": 4259,
        "y": 256,
        "r": 31
      }, {
        "x": 4303,
        "y": 512,
        "r": 34
      }, {
        "x": 18434,
        "y": 1024,
        "r": 35
      }, {
        "x": 9500,
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

new Chart(document.getElementById("donut"), {
  type: "doughnut",
  data: {
    labels: ["Wheel of Time", "Harry potter", "Dark Tower", "Mistborn", "Inheritance", "Memory, Sorrow, Thorn", "Belgariad", "Pendragon Cycle"],
    datasets: [{
      label: "My First Dataset",
      data: [44374, 24662, 19281, 7856, 6668, 6033, 4045, 3798],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgba(3, 206, 164)", "rgba(153, 102, 255)", "rgba(75, 192, 192)", "rgba(200, 206, 86)", "rgba(135, 43, 98)"]
    }]
  }
});

//"Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione" , "Elend", "Garion", "Jake", "Arthur" , "Moiraine", "Dumbledore", "Susannah", "Kelsier"

new Chart(document.getElementById("bar2"), {
  type: "bar",
  data: {
    labels: ["Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione", "Elend", "Garion", "Jake", "Arthur", "Moiraine", "Dumbledore", "Susannah", "Kelsier"],
    datasets: [{
      label: "",
      data: [16787, 12579, 7878, 7134, 6973, 6866, 6668, 6319, 6033, 5686, 4985, 4457, 4045, 3889, 3798, 3589, 2890, 2733, 3399],
      fill: false,

      //hp="rgba(255, 99, 132, 0.2)", wot="rgba(255, 159, 64, 0.2)", dt="rgba(255, 205, 86, 0.2)", mistborn="rgba(75, 192, 192, 0.2)", intce"rgba(54, 162, 235, 0.2)", mem="rgba(153, 102, 255, 0.2)", belg="rgba(201, 203, 207, 0.2)", pend='rgba(3, 206, 164)', 'rgba(76, 170, 120)'
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(201, 203, 207, 0.2)", "rgba(255, 205, 86, 0.2)", 'rgba(3, 206, 164)', "rgba(255, 159, 64, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(201, 203, 207, 0.2)", "rgba(255, 205, 86, 0.2)", 'rgba(3, 206, 164)', "rgba(255, 159, 64, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


var lineChartData = {
  labels: [
    ['Robert', ' Jordan'],
    ['Steven', ' Erikson'],
    ['George', ' R. R. Martin'],
    ['Brandon', 'Sanderson'],
    ['Stephen', 'King'],
    ['J. K.', 'Rowling'],
    ['Tad', 'Williams'],
    ['Stephen', 'R. Lawhead'],
    ['Patrick', 'Rothfuss'],
    ['J. R. R.', 'Tolkien'],
    ['Christopher', 'Paolini'],
    ['Joe', 'Abercrombie'],
    ['David', 'Eddings'],
    ['Scott', 'Bakker'],
    ['Gene', 'Wolfe'],
    ['Guy', 'Gavriel Kay'],
    ['Garth', 'Nix'],
    ['C. S.', 'Lewis'],
    ['Ursula', 'K Le Guin'],
    ['Fred', 'Saberhagen']
  ],
  datasets: [{
    label: 'My First dataset',
    borderColor: window.chartColors.red,
    backgroundColor: window.chartColors.red,
    fill: false,
    data: [4074024, 3263937, 1745214, 1384299, 1342947,
      1104023, 1073825, 936893, 653713, 636241, 629820,
      619176, 528051, 510086, 388113, 373211, 330083,
      319105, 242246, 173849
    ],
    yAxisID: 'y-axis-1',
  }, {
    label: 'My Second dataset',
    borderColor: window.chartColors.blue,
    backgroundColor: window.chartColors.blue,
    fill: false,
    data: [291002, 326394, 394043, 276860, 167868, 157718, 268456, 156149, 326857, 127248, 209940, 206392,
      105610, 170029, 194057, 124404, 110028, 45586, 60562, 57950
    ],
    yAxisID: 'y-axis-2'
  }]
};

window.onload = function() {
  var ctx = document.getElementById('tester').getContext('2d');
  window.myLine = Chart.Line(ctx, {
    data: lineChartData,
    options: {
      responsive: true,
      hoverMode: 'index',
      stacked: false,
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      },
      scales: {
        yAxes: [{
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'left',
          id: 'y-axis-1',
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'right',
          id: 'y-axis-2',

          // grid line settings
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }],
      }
    }
  });
};

document.getElementById('randomizeData').addEventListener('click', function() {
  lineChartData.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });

  window.myLine.update();
});





new Chart(document.getElementById("test"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      lineTension: 0.1
    }]
  },
  options: {}
});
