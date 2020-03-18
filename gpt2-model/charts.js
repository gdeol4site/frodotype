//Chart.plugins.unregister(ChartDataLabels);

// =========================================
// beginning of bar chart for word-count
// =========================================

var ctx = document.getElementById('word-count');
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
      label: 'Number of words',
      data: [4074024, 3263937, 1745214, 1384299, 1342947,
        1104023, 1073825, 936893, 653713, 636241, 629820,
        619176, 528051, 510086, 388113, 373211, 330083,
        319105, 242246, 173849
      ],

      backgroundColor: [
        'rgba(41,115,115, 1)',
        'rgba(133,255,199, 1)',
        'rgba(138,234,146, 1)',
        'rgba(177,204,116, 1)',
        'rgba(93,193,166, 1)',
        'rgba(120,188,170, 1)',
        'rgba(12,79,61, 1)',
        'rgba(77,165,142, 1)',
        'rgba(111,237,203, 1)',
        'rgb(40,224,175, 1)',
        'rgba(27,186,144, 1)',
        'rgba(4,104,77, 1)',
        'rgba(1,142,105, 1)',
        'rgba(25,99,79, 1)',
        'rgba(6,76,57, 1)',
        'rgba(24,124,98, 1)',
        'rgba(15,255,191, 1)',
        'rgba(34,165,130, 1)',
        'rgba(0,206,151, 1)',
        'rgba(102,255,214, 1)',
      ],
      borderColor: [
        'rgba(41,115,115, 1)',
        'rgba(133,255,199, 1)',
        'rgba(138,234,146, 1)',
        'rgba(177,204,116, 1)',
        'rgba(93,193,166, 1)',
        'rgba(120,188,170, 1)',
        'rgba(12,79,61, 1)',
        'rgba(77,165,142, 1)',
        'rgba(111,237,203, 1)',
        'rgb(40,224,175, 1)',
        'rgba(27,186,144, 1)',
        'rgba(4,104,77, 1)',
        'rgba(1,142,105, 1)',
        'rgba(25,99,79, 1)',
        'rgba(6,76,57, 1)',
        'rgba(24,124,98, 1)',
        'rgba(15,255,191, 1)',
        'rgba(34,165,130, 1)',
        'rgba(0,206,151, 1)',
        'rgba(102,255,214, 1)',
      ],
      borderWidth: 2
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

// ==================================================================
// beginning of line chart for word count and average book word count
// ==================================================================

new Chart(document.getElementById("book-size"), {
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
          319105, 242246, 173849
        ],
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

// ==================================================================
// beginning of six letter bubble chart
// ==================================================================

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

// ==================================================================
// beginning of seven letter bubble chart
// ==================================================================

var ctx = document.getElementById('bubble-seven').getContext('2d');

var myChart = new Chart(ctx, {

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
// beginning of eight letter bubble chart
// ==================================================================

var ctx = document.getElementById('bubble-eight').getContext('2d');

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
// beginning of nine letter bubble chart
// ==================================================================

var ctx = document.getElementById('bubble-nine').getContext('2d');

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
// beginning of donut chart for total names mentioned by series
// ==================================================================


new Chart(document.getElementById("seriesbar"), {
  type: "doughnut",
  data: {
    labels: ["Wheel of Time", "Harry potter", "Dark Tower", "Mistborn", "Inheritance", "Memory, Sorrow, Thorn", "Belgariad", "Pendragon Cycle"],
    datasets: [{
      datalabels: {
        display: false
      },
      label: "My First Dataset",
      data: [44374, 24662, 19281, 7856, 6668, 6033, 4045, 3798],
      backgroundColor: [
        'rgb(255,247,188)',
        'rgb(255,237,160)',
        'rgb(254,217,118)',
        'rgb(254,178,76)',
        'rgb(253,141,60)',
        'rgb(252,78,42)',
        'rgb(227,26,28)',
        'rgb(177,0,38)'
      ]
    }]
  },
});


// ==================================================================
// beginning of bar chart for name count
// ==================================================================


new Chart(document.getElementById("namesbar"), {
  type: "bar",
  data: {
    labels: ["Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione", "Elend", "Garion", "Jake", "Arthur", "Moiraine", "Dumbledore", "Susannah", "Kelsier"],
    datasets: [{
      datalabels: {
        display: false
      },
      data: [16787, 12579, 7878, 7134, 6973, 6866, 6668, 6319, 6033, 5686, 4985, 4457, 4045, 3889, 3798, 3589, 2890, 2733, 3399],
      fill: false,

      //hp="rgba(255, 99, 132, 0.2)", wot="rgba(255, 159, 64, 0.2)", dt="rgba(255, 205, 86, 0.2)", mistborn="rgba(75, 192, 192, 0.2)", intce"rgba(54, 162, 235, 0.2)", mem="rgba(153, 102, 255, 0.2)", belg="rgba(201, 203, 207, 0.2)", pend='rgba(3, 206, 164)', 'rgba(76, 170, 120)'
      backgroundColor: [
        'rgb(255,237,160)',
        'rgb(255,247,188)',
        'rgb(255,247,188)',
        'rgb(255,247,188)',
        'rgb(254,217,118)',
        'rgb(255,247,188)',
        'rgb(254,178,76)',
        'rgb(255,247,188)',
        'rgb(253,141,60)',
        'rgb(254,217,118)',
        'rgb(255,237,160)',
        'rgb(252,78,42)',
        'rgb(227,26,28)',
        'rgb(254,217,118)',
        'rgb(177,0,38)',
        'rgb(255,247,188)',
        'rgb(255,237,160)',
        'rgb(254,217,118)',
        'rgb(252,78,42)',
      ]
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

//Letter PIE chartjs

// For a pie chart
new Chart(document.getElementById("myPieChart"), {
  type: "pie",
  data: {
    labels: ["Wheel of Time", "Harry potter", "Dark Tower", "Mistborn", "Inheritance", "Memory, Sorrow, Thorn", "Belgariad", "Pendragon Cycle"],
    datasets: [{
        datalabels: {
          display: false
        },
        label: "My First Dataset",
        data: [44374, 24662, 19281, 7856, 6668, 6033, 4045, 3798],
        backgroundColor: [
          'rgb(255,247,188)',
          'rgb(255,237,160)',
          'rgb(254,217,118)',
          'rgb(254,178,76)',
          'rgb(253,141,60)',
          'rgb(252,78,42)',
          'rgb(227,26,28)',
          'rgb(177,0,38)'
        ]
      }, {
        datalabels: {
          display: false
        },
        label: "My First Dataset",
        data: [4000, 2400, , 3004, 3344, 6677, 6473, 1243],
        backgroundColor: [
          'rgb(255,247,188)',
          'rgb(255,237,160)',
          'rgb(254,217,118)',
          'rgb(254,178,76)',
          'rgb(253,141,60)',
          'rgb(252,78,42)',
          'rgb(227,26,28)',
          'rgb(177,0,38)'
        ]
      }

    ]
  },
});

var sixbar = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione", "Elend", "Garion", "Jake", "Arthur", "Moiraine", "Dumbledore", "Susannah", "Kelsier"],
    datasets: [{
      datalabels: {
        display: false
      },
      data: [16787, 12579, 7878, 7134, 6973, 6866, 6668, 6319, 6033, 5686, 4985, 4457, 4045, 3889, 3798, 3589, 2890, 2733, 3399],
      fill: false,

      //hp="rgba(255, 99, 132, 0.2)", wot="rgba(255, 159, 64, 0.2)", dt="rgba(255, 205, 86, 0.2)", mistborn="rgba(75, 192, 192, 0.2)", intce"rgba(54, 162, 235, 0.2)", mem="rgba(153, 102, 255, 0.2)", belg="rgba(201, 203, 207, 0.2)", pend='rgba(3, 206, 164)', 'rgba(76, 170, 120)'
      backgroundColor: [
        'rgb(255,237,160)',
        'rgb(255,247,188)',
        'rgb(255,247,188)',
        'rgb(255,247,188)',
        'rgb(254,217,118)',
        'rgb(255,247,188)',
        'rgb(254,178,76)',
        'rgb(255,247,188)',
        'rgb(253,141,60)',
        'rgb(254,217,118)',
        'rgb(255,237,160)',
        'rgb(252,78,42)',
        'rgb(227,26,28)',
        'rgb(254,217,118)',
        'rgb(177,0,38)',
        'rgb(255,247,188)',
        'rgb(255,237,160)',
        'rgb(254,217,118)',
        'rgb(252,78,42)',
      ]
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

new Chart(document.getElementById("siixbar"), {
  "type": "horizontalBar",
  "data": {
    "labels": ['moment', 'behind', 'enough', 'turned', 'little', 'though', 'around', 'seemed', 'looked', 'before'],
    "datasets": [{
      "label": "Top ten 6 letter words",
      "data": [16147, 16183, 17080, 18041, 18565, 18586, 20531, 21206, 25488, 31869],
      "fill": false,
      "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
      "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
      "borderWidth": 1
    }]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
});
