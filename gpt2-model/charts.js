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
          labels: ['', 'should', 'across', 'people', 'things', 'almost', 'others', 'toward', 'always', 'course', 'nodded', ''],
          datasets: [{
              data: [{
                "x": 15000,
                "y": 0,
                "r": 0
              },{
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
          },
          {
              data: [{
                "x": 15000,
                "y": 0,
                "r": 0
              },{
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
  });
