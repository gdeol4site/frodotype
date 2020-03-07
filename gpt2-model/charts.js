Chart.plugins.unregister(ChartDataLabels);

  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        ['Robert', 'Jordan'],
        ['Steven', 'Erikson'],
        ['George', 'R. R. Martin'],
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
          datalabels: false   // disable plugin 'p1' for this instance
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
var ctx = document.getElementById('test').getContext('2d');

var myChart = new Chart(ctx, {

  type: 'bubble',
      data: {
          labels: ['', 'blood', 'shoulder', 'moon', 'beam', ''],
          datasets: [{
              data: [{
                "x": 400,
                "y": 0,
                "r": 0
              }, {
                "x": 500,
                "y": 3,
                "r": 15
              }, {
                "x": 678,
                "y": 4,
                "r": 20
              }, {
                "x": 789,
                "y": 5,
                "r": 29
              }, {
                "x": 890,
                "y": 6,
                "r": 35
              }, {
                "x": 1000,
                "y": 10,
                "r": 0
              }]
          }]
      },
      options: {
          plugins: [{
              datalabels: true,
              datalabels: {
                  align: 'top',
                  font: {
                    weight: 'bold'
                  },
                  formatter: function(value, context) {
                      return context.chart.data.labels[context.dataIndex];
                  },
              }
          }]
      }
  });
