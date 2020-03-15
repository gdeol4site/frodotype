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
      label: '# of Votes',
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
        "r": 20
      }, {
        "x": 2643,
        "y": 4,
        "r": 28
      }, {
        "x": 2730,
        "y": 16,
        "r": 30
      }, {
        "x": 2766,
        "y": 32,
        "r": 32
      }, {
        "x": 2801,
        "y": 64,
        "r": 35
      }, {
        "x": 3639,
        "y": 128,
        "r": 41
      }, {
        "x": 4152,
        "y": 256,
        "r": 41
      }, {
        "x": 4259,
        "y": 1024,
        "r": 42.5
      }, {
        "x": 4303,
        "y": 2400,
        "r": 43
      }, {
        "x": 18434,
        "y": 4096,
        "r": 57
      }, {
        "x": 9500,
        "y": 5000,
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
// beginning of donut chart for total names mentioned by series
// ==================================================================


new Chart(document.getElementById("seriesbar"), {
  type: "doughnut",
  data: {
    labels: ["Wheel of Time", "Harry potter", "Dark Tower", "Mistborn", "Inheritance", "Memory, Sorrow, Thorn", "Belgariad", "Pendragon Cycle"],
    datasets: [{
      label: "My First Dataset",
      data: [44374, 24662, 19281, 7856, 6668, 6033, 4045, 3798],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgba(3, 206, 164)", "rgba(153, 102, 255)", "rgba(75, 192, 192)", "rgba(200, 206, 86)", "rgba(135, 43, 98)"]
    }]
  },
});

//"Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione" , "Elend", "Garion", "Jake", "Arthur" , "Moiraine", "Dumbledore", "Susannah", "Kelsier"

// ==================================================================
// beginning of bar chart for name count
// ==================================================================


new Chart(document.getElementById("namesbar"), {
  type: "bar",
  data: {
    labels: ["Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione", "Elend", "Garion", "Jake", "Arthur", "Moiraine", "Dumbledore", "Susannah", "Kelsier"],
    datasets: [{
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

// ==================================================================
// beginning of six letter bubble chart
// ==================================================================

/* var ctx = document.getElementById('one-bubble').getContext('2d');

var myChart = new Chart(ctx, {

  type: 'bubble',
  data: {
    labels: ['', 'moment', 'behind', 'enough', 'turned', 'little', 'though', 'around', 'seemed', 'looked', 'before', ''],
    datasets: [{
      data: [{
        "x": 1800,
        "y": 0,
        "r": 0
      }, {
        "x": 16147,
        "y": 1432,
        "r": 27
      }, {
        "x": 16183,
        "y": 1475,
        "r": 27
      }, {
        "x": 17080,
        "y": 1500,
        "r": 28
      }, {
        "x": 18041,
        "y": 1560,
        "r": 30
      }, {
        "x": 18565,
        "y": 1600,
        "r": 31
      }, {
        "x": 18586,
        "y": 1615,
        "r": 31
      }, {
        "x": 20531,
        "y": 1715,
        "r": 34
      }, {
        "x": 21206,
        "y": 1760,
        "r": 35
      }, {
        "x": 25488,
        "y": 2020,
        "r": 42
      }, {
        "x": 31869,
        "y": 2400,
        "r": 53
      }, {
        "x": 34000,
        "y": 2600,
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
    }, {
      data: [{
        "x": 9037,
        "y": 930,
        "r": 27
      }, {
        "x": 10478,
        "y": 1035,
        "r": 27
      }, {
        "x": 10628,
        "y": 1050,
        "r": 28
      }, {
        "x": 10734,
        "y": 1060,
        "r": 30
      }, {
        "x": 14600,
        "y": 1320,
        "r": 31
      }, {
        "x": 14934,
        "y": 1360,
        "r": 31
      }, {
        "x": 14941,
        "y": 1370,
        "r": 34
      }, {
        "x": 18451,
        "y": 1560,
        "r": 35
      }, {
        "x": 25427,
        "y": 2015,
        "r": 42
      }, {
        "x": 27717,
        "y": 2150,
        "r": 53
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
    }, {
      data: [{
        "x": 4713,
        "y": 550,
        "r": 28
      }, {
        "x": 4753,
        "y": 580,
        "r": 30
      }, {
        "x": 4822,
        "y": 599,
        "r": 32
      }, {
        "x": 5110,
        "y": 610,
        "r": 35
      }, {
        "x": 5290,
        "y": 625,
        "r": 30
      }, {
        "x": 5456,
        "y": 660,
        "r": 31
      }, {
        "x": 5694,
        "y": 685,
        "r": 31
      }, {
        "x": 5821,
        "y": 700,
        "r": 34
      }, {
        "x": 6520,
        "y": 750,
        "r": 35
      }, {
        "x": 8886,
        "y": 920,
        "r": 70
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
    }, {
      data: [{
        "x": 2425,
        "y": 345,
        "r": 20
      }, {
        "x": 2643,
        "y": 375,
        "r": 28
      }, {
        "x": 2730,
        "y": 390,
        "r": 30
      }, {
        "x": 2766,
        "y": 410,
        "r": 32
      }, {
        "x": 2801,
        "y": 420,
        "r": 35
      }, {
        "x": 3639,
        "y": 475,
        "r": 30
      }, {
        "x": 4152,
        "y": 520,
        "r": 31
      }, {
        "x": 4259,
        "y": 540,
        "r": 31
      }, {
        "x": 4303,
        "y": 570,
        "r": 34
      }, {
        "x": 18434,
        "y": 1590,
        "r": 35
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
    }],
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
}); */
